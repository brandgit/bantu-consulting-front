import React from 'react';
import { NavLink } from "react-router-dom";


const MainNosServicesComponent = ({iconService,nosServicesItems1,nosServicesItems2, service}) => {
    return (
        <div className='wrapperMainNosServices'>
            <div className="notreSavoirFaire">
                <h1>NOS OFFRES </h1>
                <h3>Quel est vottre choix de {service} ?</h3>
            </div>
            <div className="nosServicesMain">
              <div className="blockServiceMain">
                {nosServicesItems1.map((item) => (
                    <div className="serviceMain">
                    <div className="logoImeServiceMain">
                            <img src={item.icon} alt="" />
                    </div>
                    <div className="nameItemServiceMain1">
                            <h4>{item.name}</h4>
                    </div>
                </div>
                ))}
              </div>
                <div className="logoServiceMain">
                        <div className="iconeServiceMain">
                                <img src={iconService} alt="" />
                        </div>
                </div>
                <div className="blockServiceMain">
                    {nosServicesItems2.map((item) => (
                    <div className="serviceMain1">
                        <div className="nameItemServiceMain2">
                            <h4>{item.name}</h4>
                    </div>
                    <div className="logoImeServiceMain">
                            <img src={item.icon} alt="" />
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className="detailsServiceMain">
                <div className='detailsTopServiceMain'>
                    <h2>
                        Pour un accompagnement spécific et intélligent, conçu pour avoir de l'impact 
                    </h2>
                </div>
                <div className="blockDetailsServiceMain">
                    {nosServicesItems1.map((item) => (
                        <div className="detailsServiceMain">
                            <div className='wrapperItems'>
                                  <div className="nameDetailItemServiceMain">
                                    <h1>{item.name}</h1>
                                    <p>
                                            Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit
                                    </p>
                                    <NavLink className="enSavoirPlus" to={item.screen}>
                                        <span className="enSavoirPlusP"  >EN SAVOIR PLUS</span>
                                    </NavLink>
                                 </div>
                                <div className="logoDetailImeServiceMain">
                                        <img src={item.image} alt="" />
                                    
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className="blockDetailsServiceMain">
                        {nosServicesItems2.map((item) => (
                         <div className="detailsServiceMain">
                         <div className='wrapperItems'>
                               <div className="nameDetailItemServiceMain">
                                 <h1>{item.name}</h1>
                                 <p>
                                         Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit Petit descriptif du service histoire d'expliquer en quelques ligne de quoi il s'agit
                                 </p>
                                 <NavLink className="enSavoirPlus" to={item.screen}>
                                    <span className="enSavoirPlusP"  >EN SAVOIR PLUS</span>
                                 </NavLink>
                              </div>
                             <div className="logoDetailImeServiceMain">
                                     <img src={item.image} alt="" />
                                 
                             </div>
                         </div>
                         {/* <NavLink className="enSavoirPlus" to={item.screen}>
                            <p>EN SAVOIR PLUS</p>
                        </NavLink> */}
                     </div>
                        ))}
                </div>
            </div>
           <div className='wrapperButtonContactezNous'>

               <div className="wrapperText">
                    <p>Un question sur un de nos services, besoin de plus de détails ?</p>
                </div>
                <NavLink className="btnContactezNous" to={"advice"}>
                    <div className="buttonContactezNous">
                        <p>Contactez-nous!</p>
                    </div>
                </NavLink>
           </div>
           <div className='content'> </div>
        </div>
    );
};

export default MainNosServicesComponent;