import React, {Component} from "react";
import {WebFooter} from "../navbar/Footer";
import {TitleParaInfo} from "../medias/mediaText";

export class Documentation extends Component{

    // getDoc(){
    //     axios({
    //         url: '/doc', // download url
    //         method: 'get',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             mode: 'no-cors'
    //         }
    //     }).then{ res-> {
    //         JSON.stringify()
    //     )}
    // }

    render() {
        return (
            <>
                <div className="col-12 text-center document-top-content mg-top-10">
                    <TitleParaInfo
                    title="Documentazione"
                    paragraph="Di seguito è disponibile una documentazione scritta da me a proposito degli attacchi XSS DOM Based,
                                 scaricabile dal pulsante in fondo alla pagina!"
                    info="**Ricordiamo che per poter visualizzare il documento
                                 è necessario possedere un estensione che permetta la visualizzazione di pdf,
                                  in alternativa è possibile visualizzarla tramite Microsoft Edge!"
                    />
                </div>
                <div className="doc-content">
                    <iframe src="http://localhost:8000/storage/documentation/report2021_07_23_0_04_11.pdf" width="80%"
                            height="1300px" frameBorder="0"/>
                </div>
                <WebFooter/>
            </>
        );
    }
}
