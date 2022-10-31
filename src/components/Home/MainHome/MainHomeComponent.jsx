import React from 'react';
import Fondators from './Fondators';
import NosServicesComponent from './NosServicesComponent';
const icon1 = require('../../../assets/iconsApp/icon1-removebg-preview.png');
const icon2 = require('../../../assets/iconsApp/icon2-removebg-preview.png')

export const MainHomeComponent = () => {

    const c1 = "<<";
    const c2 = ">>";

    return (
        <div className='wrapperMainHome'>
            <di className='blockMainContainer'>
                <div className='mainContainer'>
                    <div className='weContainer'>
                        <div className='descriptionWeContainer'>
                            <h1 className="titleWeContainer">{c1}Tout seul </h1>
                            <h1 className="titleWeContainer">on va plus vite,</h1>
                            <h1 className="titleWeContainer"> ensemble, </h1>
                            <h1 className="titleWeContainer">on va plus loin{c2}</h1>
                            <div className='citationContainer'>
                            <p className="nRETextH2">Votre agence d'accopagnement </p>
                            <p className="nRETextH2">et de communication digital,  </p>
                            <p className="nRETextH2">qui vous accompagne le developpement de votre business. </p>
                        </div>
                        </div>
                        <div className='iconWeContainer'>
                            <div className='containerWeIcon1'>
                                <img src={icon1} alt="" />
                                <div>
                                    <p>Simplicité</p>
                                    <p>Clarté</p>
                                </div>
                            </div>
                            <div className='containerWeIcon2'>
                                <div>
                                    <p>Accompagnement</p>
                                    <p>Collaboratopn</p>
                                </div>
                                <img src={icon2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </di>
            <NosServicesComponent/>
            <Fondators/>
        </div>
    );
};