import React from 'react';
import { nosServicesItems, nosServicesItems2 } from "../../../assets/stockages/Stockages";
import { NavLink } from "react-router-dom";

const NosServicesComponent = () => {
    return (
        <div className='wrapperNosServices'>
            <div className="nosServicesTitle">
                <div>
                    <h1>Nos services</h1>
                 </div>
            </div>
            <div className='nosServicesBio'>
                    <p className="nosServicesText">
                      Des offres de qualité
                    </p>
                    <p className="nosServicesText">
                      Professionnelles pour booster  
                    </p>
                    <p className="nosServicesText">
                    votre business
                    </p>
            </div>
            
           
            <div className='wrapperListeDesServices'>
            <div className='listeDesServicesItems'>
                    {nosServicesItems2.map((item) => ( 
                   <>

                        <div key={item.id}  className="eachService-Item">
                               <div className='serviceIcon'>

                                    <div>
                                         <img src={item.image} alt="" />
                                    </div>
                               </div>
                                <div className='serviceTitle'>
                                     <h2>{item.name}</h2>
                                </div>
                                <div className='serviceText'>
                                    <p>
                                        Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit
                                    </p>
                                </div>
                                <NavLink className="service-Item" to={item.screen}>
                                    <div className='serviceNavig'>
                                    <p>En savoir plus...</p>
                                    </div>
                                </NavLink>
                        </div>
                    </>
                ))}
                </div>
<div className='listeDesServicesItems'>
{nosServicesItems.map((item) => ( 
                    <>

                        <div key={item.id}  className="eachService-Item">
                               <div className='serviceIcon'>
                                    <div>
                                                    <img src={item.image} alt="" />
                                    </div>
                               </div>
                                <div className='serviceTitle'>
                                    <h2>{item.name}</h2>
                                </div>
                                <div className='serviceText'>
                                    <p>
                                        Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit
                                    </p>
                                </div>
                                <NavLink className="service-Item" to={item.screen}>
                                    <div className='serviceNavig'>
                                         <p>En savoir plus...</p>
                                    </div>
                                </NavLink>
                        </div>
                    </>
                ))}
                 </div>
            </div> 
        </div>
    );
};

export default NosServicesComponent;