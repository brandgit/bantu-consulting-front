import React from "react";
import { HeaderComponent } from "./Header/HeaderComponent";
const bio = "Partagez vous l’idée que l’on puisse investir en afrique  en toute séreinité,sans craindre de perdre de l’argent?"


export const TopNosServiceComponent = ({nameScreen, imageTop, bg}) => {

    return (
        <div className='wrapperTopNosServiceComponent'>
              <HeaderComponent />
                <div className={bg}>
                          <div className="blurTopNosService">
                                  <div className="titleTopNosServices">
                                            <h1>{nameScreen}</h1>
                                  </div>
                                  <div className="descriptionTopNosServices">
                                        <div className="bioTopNosServices">
                                            <p className="textTopNosServices">{bio}</p>
                                        <div className='buttonTopServices'>
                                            <p>Souscrire</p>
                                        </div>
                                  </div>
                                  <div className="vertorNosServices" >
                                              <img src={imageTop} alt="" />
                                  </div>
                          </div>
                    </div> 
              </div>
        </div>
    );
};
