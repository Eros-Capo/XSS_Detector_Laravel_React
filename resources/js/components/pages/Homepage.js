import React from "react";
import {ImageText} from "../medias/mediaText";
import image from "../../../images/4.jpg";
import {TabbedText} from "../tabs/Tabs";
import {WebFooter} from "../navbar/Footer";

export const Homepage = ()=>{
    return(
        <>
            <div className="d-flex justify-content-center">
                <div className="home-content mg-top-10">
                    <ImageText
                        src={image}
                        alt="image"
                        classes="w-100 image-home"
                        title="Cos'è un attacco XSS?"
                        paragraph="Un attacco XSS è un vettore di attacco basato sull'iniezione di codice javascript che permetta all'attaccante di eseguire codice malevolo,
                                   questo tipo di vettore d'attacco risulta molto comune nel World Wide Web, tanto che ne sono state colpite aziende del calibro di:"
                        liOne=  "Yahoo"
                        liTwo =  "MySpace"
                        liThree="Hotmail"
                        paragraphTwo="Vi sono vari tipi di varianti come da immagine a lato, il fattore che li accomuna è che il codice iniettato deve essere interpretato come benevolo."
                    />
                    <TabbedText/>
                </div>
            </div>
            <WebFooter/>
        </>
    );
}
