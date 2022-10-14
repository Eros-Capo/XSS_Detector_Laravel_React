<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\FormModel;
use App\Models\FormXss;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BackendController extends Controller{

    public function ReceiveFormData(Request $request){

        $validatedData = $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'message' => 'required',
        ]);
        try{
            $contact = new FormModel;
            $contact->name=$request->get('name');
            $contact->surname=$request->get('surname');
            $contact->phone=$request->get('phone');
            $contact->email=$request->get('email');
            $contact->message=$request->get('message');
            $contact->save();
        }catch(Exception $e){
            return json_encode($validatedData);
        }
        return $request->dump();
    }

    public function ReceiveFormXss(Request $request){

        $validatedData = $request->validate([
            'url' => 'required',
            'sources' => 'required',
            'sinks' => 'required',
            'sourcesNumber' => 'required',
            'sinksNumber' => 'required',
            'pdf' => 'required',
            'pdfPreview' => 'required',
            'attack_data' => 'required',
        ]);
        try{
            $XDOM = new FormXss;
            $XDOM->url=$request->get('url');
            $XDOM->sources=$request->get('sources');
            $XDOM->sinks=$request->get('sinks');
            $XDOM->sourcesNumber=$request->get('sourcesNumber');
            $XDOM->sinksNumber=$request->get('sinksNumber');
            $XDOM->pdf=$request->get('pdf');
            $XDOM->pdfPreview=$request->get('pdfPreview');
            $XDOM->attack_data=$request->get('attack_data');
            $XDOM->save();

            $res = DB::table('xss')->where('id', '=', $XDOM->id);
            $response = $res->get('pdf');
        }catch(Exception $e){
            return json_encode($validatedData);
        }
        return $response;
    }

//    public function RestDoc(Request $request)
//    {
//        $documentation= 'http://localhost:8000/storage/documentation/report2021_07_23_0_04_11.pdf';
//        return response()->json($documentation, '200');
//    }

}
