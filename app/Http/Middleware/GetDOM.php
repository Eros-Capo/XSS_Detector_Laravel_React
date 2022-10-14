<?php

namespace App\Http\Middleware;

use Closure;
use DOMDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;

class GetDOM
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (isset($request->url)){
            $urlToTest = $request->url;
        }else{
            print_r("Non ho trovato il cURL");
        }
        $ch = '
                "Accept: text/html,application/xhtml+xml,application/xml;"
                "Keep-Alive: 300"
                "Connection: keep-alive"
                "pragma: no-cache"
                "Cache-Control: no-cache"
        ';

        $ch = curl_init();
        $headers = array();
        curl_setopt($ch, CURLOPT_URL, $urlToTest);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HEADERFUNCTION,
            function($curl, $header) use ($request, &$headers)
            {
                $len = strlen($header);
                $header = explode(':', $header, 2);
                if (count($header) < 2) {  // ignore invalid headers
                    return $len;
                }
                $headers[strtolower(trim($header[0]))][] = trim($header[1]);
                return $len;
            }
        );

        $dom = new DOMDocument('1.0', 'UTF-8');
        $dom->formatOutput=false;
        $dom->preserveWhiteSpace=true;
        $dom->validateOnParse=false;
        $dom->strictErrorChecking=false;
        $dom->recover=true;

        $curlDom = curl_exec($ch);

        libxml_use_internal_errors(true);
        $dom->loadHTML($curlDom);
        libxml_use_internal_errors(false);

        $dom = preg_replace('/(\<\!--)(.*)(-->)|(<html lang=")(.*)(">)/',"",$dom->saveHTML());

        if ($dom === false) {
            dd(curl_error($ch), curl_errno($ch));
        }
        curl_close($ch);
        $dom = nl2br($dom);
        $regex_xssdom_sources = '/(document.URL)|(document.documentURI)|(document.URLUnencoded)|(document.baseURI)|(location\()|(document.cookie)|(document.referrer)|(window.name)|(history.pushState)|(history.replaceState)|(localStorage)|(sessionStorage)/';
        $regex_xssdom_sinks = '/(document.write\()|(window.location)|(document.cookie)|(eval\()|(document.domain)|(WebSocket\()|(element.src)|(postMessage\()|(setRequestHeader\()|(FileReader.readAsText\()|(ExecuteSql\()|(sessionStorage.setItem\()|(document.evaluate\()|(JSON.parse\()|(element.setAttribute\()|(RegExp\()/';
        //$regex_xssdom_sources = '((location\s*[\[.])|([.\[]\s*["\']?\s*(arguments|dialogArguments|innerHTML|write(ln)?|open(Dialog)?|showModalDialog|cookie|URL|documentURI|baseURI|referrer|name|opener|parent|top|content|self|frames)\W)|(localStorage|sessionStorage|Database))';
        //$regex_xssdom_sinks = '(((src|href|data|location|code|value|action)\s*["\'\]]*\s*\+?\s*=)|((replace|assign|navigate|getResponseHeader|open(Dialog)?|showModalDialog|eval|evaluate|execCommand|execScript|setTimeout|setInterval)\s*["\'\]]*\s*\())';
        // source_matches[0] sarà un array contentente tutte le occorrenze delle sorgenti DOMxss
        // sinks_matches[0] sarà un array contente tutte le occorrenze dei sink presenti nel codice
        $number_of_sources=preg_match_all($regex_xssdom_sources,$dom, $sources_matches, PREG_OFFSET_CAPTURE);
        $number_of_sinks=preg_match_all($regex_xssdom_sinks,$dom, $sinks_matches, PREG_OFFSET_CAPTURE);

        $list_of_sources ="";
        $list_of_sinks ="";

        foreach (current($sources_matches) as $source) {
            $matchSource = $source[0];
            $sourcesLineNumber = mb_substr_count(mb_substr($dom, 0, $source[1],'UTF-8'), '<br />') + 1;
            $list_of_sources .= $matchSource . " at line " . $sourcesLineNumber . "<br/>";
        }

        foreach (current($sinks_matches) as $sink) {
            $matchSink = $sink[0];
            $sinksLineNumber = mb_substr_count(mb_substr($dom, 0, $sink[1],'UTF-8'), '<br />') + 1;
            $list_of_sinks .= $matchSink . " at line " . $sinksLineNumber . "<br/>";
        }

        $pdf = App::make('dompdf.wrapper');
        $html = '
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <style>

                     </style>
                </head>
                <body>
                    <h1>Report</h1>
                    <h2>Sorgenti per possibili attacchi</h2>
                    <p>Una sorgente in un attacco XSS DOM Based è un\'istruzione di codice in cui può essere iniettato del codice malevolo</p>
                    '.$list_of_sources.'
                    <h2>Vulnerabilità (Sink) per possibili attacchi</h2>
                    <p>Una vulnerabilità o (Sink) in un attacco XSS DOM Based è invece \'istruzione di codice che può eseguire codice malevolo</p>
                    '.$list_of_sinks.'
                </body>
            </html>
';
        $pdf->loadHTML($html);
        $content = $pdf->download()->getOriginalContent();
        $timestamp = date('Y_m_d_G_i_s');
        $path = "public/pdf/report".$timestamp.".pdf";
        Storage::put($path,$content);

        $request->merge(['sources' => $list_of_sources, 'sinks' => $list_of_sinks, 'sourcesNumber' => $number_of_sources, 'sinksNumber' => $number_of_sinks,'pdf' => $path, 'pdfPreview' => $html, 'attack_data' => $timestamp]);
        return $next($request);
    }
}
