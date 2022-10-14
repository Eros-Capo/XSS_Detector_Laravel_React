import React from "react";
import me from "../../../images/me.jpg";
import {ImageTextNoLi} from "../medias/mediaText";
import {WebFooter} from "../navbar/Footer";

export const AboutMe = ()=>{
    return(
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="about-content mg-top-10">
                    <ImageTextNoLi
                        src={me}
                        alt="me"
                        title="About me"
                        titleClasses="title-md-about text-capitalize text-left"
                        paragraph="Mi chiamo Eros, sono uno studente dell'Università degli studi di Milano, da sempre appassionato di informatica
                                   e specialmente del campo della sicurezza, per il mio progetto da svolgere in programmazione Web e Mobile ho deciso di portare una WebApp
                                   che si occupa di analizzare attraverso l'analisi statica del codice sorgente i siti inseriti dall'utente tramite URL in cerca di falle che
                                   potrebberò facilitare/consentire vettori d'attacco di tipo XSS, nello specifico XSS DOM Based. Questa WebApp è svolta tramite l'utilizzo di
                                   Laravel come framework Backend e React.js come libreria principale per il Frontend, all'interno dei componenti possiamo trovare anche il tag
                                    specifico HTML5 <mark> utilizzato per evidenziare sezioni importanti nei testi. NPM e Composer sono stati utilizzati come packet manager
                                    per consentire l'implementazione di componenti librerie esterni come Bootstrap, react-router-dom, laravel-dompdf ecc...
                                    Le chiamate di rete sono state effettuate appunto attraverso una di queste librerie, ovvero, axios, una libreria che permette una semplice
                                    gestione delle XMLHttpRequests, risoluzione di Promise, e fetch di dati JSON.."
                    />
                </div>
            </div>
            <WebFooter/>
        </>
    );
}
