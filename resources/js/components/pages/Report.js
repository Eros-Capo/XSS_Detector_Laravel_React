import React, {Component} from "react";
import {WebFooter} from "../navbar/Footer";
import {Button} from "react-bootstrap";
import {TitleParaInfo} from "../medias/mediaText";

export class Report extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="report-content">
                    <div className="container-80-nomg">
                        <TitleParaInfo
                            title="Report"
                            paragraph="Di seguito √® disponibile il report sulle eventuali vulnerabilit√†,
                                 scaricabile dal pulsante in fondo alla pagina!"
                            info="**Ricordiamo che per poter visualizzare il documento
                                 √® necessario possedere un estensione che permetta la visualizzazione di pdf,
                                  in alternativa √® possibile visualizzarla tramite Microsoft Edge!"
                        />
                        <iframe src={this.props.location.blob.replace('public', 'http://localhost:8000/storage')}
                                width="100%" height="1300px"/>
                        <div className="d-flex justify-content-end align-items-center mt-3">
                            <a href={this.props.location.blob.replace('public', 'http://localhost:8000/storage')} download="Report.pdf">
                                <Button className="btn btn-custom">Download</Button>
                            </a>
                        </div>
                    </div>
                </div>
                <WebFooter/>
            </>
        );
    }
}
