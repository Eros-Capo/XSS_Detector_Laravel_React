import React from "react";
import {XssForm} from "../forms/XssForm";
import {WebFooter} from "../navbar/Footer";
import {TitlePara} from "../medias/mediaText";

export const XSSDetector = ()=>{
    return(
        <>
            <div className="xss-wrapper">
                <div className="d-flex justify-content-center mg-top-10">
                    <TitlePara
                        title="XSS Detector"
                        paragraph="XSS Detector è un tool sviluppato con lo scopo di rendere semplice e veloce per gli sviluppatori, la ricerca di eventuali
                                            vulnerabilità di tipo DOMBased, è semplicissimo!
                                            Inserisci un URL per compiere l'analisi, successivamente ti verrà mostrato un report PDF che potrai scaricare!"
                    />
                </div>
                <div className="xss-content">
                    <div className="col-md-8 col-12">
                        <XssForm/>
                    </div>
                </div>
            </div>
            <WebFooter/>
        </>
    );
}
