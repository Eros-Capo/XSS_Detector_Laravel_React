import React from "react";
import {ContactForm} from "../forms/ContactForm";
import {WebFooter} from "../navbar/Footer";

export const Contacts = ()=>{
  return(
    <>
        <div className="col-12 text-center contact-wrapper mg-top-10">
            <h1 className="mt-header">Contacts</h1>
        </div>
        <div className="container-80 text-center">
            <ContactForm/>
        </div>
        <WebFooter/>
    </>
  );
}
