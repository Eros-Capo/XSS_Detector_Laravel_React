import React from "react";
import {Tabs, Tab} from "react-bootstrap";


export const TabbedText = (props) =>{
    return(
        <>
            <div className="col-12">
                <Tabs defaultActiveKey="one" className="mt-3">
                    <Tab title="Source Code Analysis Tool" eventKey="one">
                        <div>
                            <p className="tab-text">
                                Strumenti di questo tipo fanno parte di una categoria chiamata "Static Application Security Testing",
                                <mark>sono programmi in grado di analizzare il codice sorgente o versioni compilate di codice con lo scopo di ricercare falle e vulnerabilità.</mark>
                                Uno dei loro principali punti a favore è che possono essere implementati per l'analisi di una grande quantità di software, inoltre sono molto utili
                                nella ricerca di vulnerabilità "ben definite" che quindi possono essere automaticamente trovate questi software con un'alta affidabilità.
                                L'output generato da questo tipo di file è molto utile per lo sviluppatore in quanto evidenzia le fonti precise all'interno del codice,
                                il numero di linea o intere sezioni.
                            </p>
                        </div>
                    </Tab>
                    <Tab title="Cos'è una vulnerabilità?" eventKey="two">
                        <p className="tab-text">
                            In accordo con il "Common Vulnerabilities and Exposures (CVE)" una vulnerabilità è per definizione <mark>"Un errore nel software che può essere direttamente utilizzato da un hacker
                            per accedere ad un sistema oppure ad una rete"</mark>, il CVE considera la vulnerabilità uno stato in un sistema informatico che consente ad un utente malintenzionato: di eseguire
                            comandi riservati ad altri tipi di utente o ad altri utenti, accedere a dati non privilegiati, mascherarsi come un'altra entità e/o influenzare il corretto comportamento del sistema.
                            Espandendo la nozione di vulnerabilità proposta dalla CVE, possiamo affermare che <mark>una vulnerabilità è un qualsiasi aspetto del software che può essere utilizzato per usare in modo
                            meschino o sleale a proprio vantaggio la riservatezza, l'integrità e/o la disponibilità del sistema</mark>. In molti casi le vulnerabilità derivano da errori nella programmazione e/o utilizzo
                            di funzioni interpretate erroneamente. Le vulnerabilità sono difetti, ma non tutti i difetti sono vulnerabilità.
                        </p>
                    </Tab>
                    <Tab title="Analisi Statica" eventKey="three">
                        <p className="tab-text">
                            L'analisi statica del codice sorgente è emersa di recente come mezzo standard per analizzare un programma con lo scopo di trovare potenziali errori relativi alla sicurezza
                            in fase di compilazione. L'analisi statica, processo anche chiamato Static Application Security Testing (SAST) è quindi “<mark>il processo di valutazione di un sistema o di un componente in base alla sua forma, struttura, contenuto o documentazione.</mark>
                            Lo scopo principale dell'analisi del codice di un'applicazione è la scoperta di potenziali errori. È "statico" perché analizza le applicazioni senza eseguirle,
                            il che significa che un'applicazione può essere testata in modo esauriente senza creare un ambiente di runtime o mettere a rischio i sistemi di produzione.
                            Ciò rende l'analisi del codice statico molto adatta per testare le applicazioni in ricerca dei difetti di sicurezza.
                        </p>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
