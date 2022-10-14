import React from "react";

export const ImageText = (props)=>{
    return(
        <>
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-md-6 align-self-center">
                        <img src={props.src} alt={props.alt} className={props.classes}/>
                    </div>

                    <div className="col-12 col-md-6 align-self-center">
                        <h1 className="text-capitalize text-left">{props.title}</h1>
                        <p className="text-justify">{props.paragraph}</p>
                        <ul>
                            <li>{props.liOne}</li>
                            <li>{props.liTwo}</li>
                            <li>{props.liThree}</li>
                        </ul>
                        <p className="text-justify">{props.paragraphTwo}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export const ImageTextNoLi = (props)=>{
    return(
        <>
            <div className="d-flex flex-wrap">
                <div className="col-md-6 col-12 align-self-center">
                    <div className="box-image d-flex justify-content-center">
                        <img src={props.src} alt={props.alt} className="w-100"/>
                    </div>
                </div>
                <div className="col-md-6 col-12 align-self-center">
                    <h1 className={props.titleClasses}>{props.title}</h1>
                    <p className="text-justify">{props.paragraph}</p>
                </div>
            </div>
        </>
    );
};

export const TitlePara = (props) => {
    return(
      <>
          <div className="col-12">
              <h1 className="text-center">{props.title}</h1>
              <p className="text-justify">{props.paragraph}</p>
          </div>
      </>
    );
}

export const TitleParaInfo = (props) => {
    return(
        <>
            <div className="col-12">
                <h1 className="text-center">{props.title}</h1>
                <p className="text-justify">{props.paragraph}<br/><span className="info-text">{props.info}</span></p>
            </div>
        </>
    );
}
