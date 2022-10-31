import React from 'react';
import { NavLink } from "react-router-dom";
import { DeveloperInfoAndPermission } from '../DeveloperInfoAndPermission';
import { LogoComponent } from '../LogoComponent';
const instagram = require("../../../assets/imagesApp/instagram.png");
const linkedin = require("../../../assets/imagesApp/linkedin.png");

export const FooterComponent = () => {
    return (
        <div className='wrapperFooter'>
            <div className='topFooter'>
                <LogoComponent/>
            </div>
            <div className='wrapperRessourcesFooter'> 
                <div className='ressourcesFooterContainer'>
                    <div className='blockNavigation block-1'>
                        <h3>
                            <p>A propos de nous</p>
                        </h3>
                        <NavLink className="navLinkFooter" to="/advice">
                            <p>Qui sommes nous ?</p>
                        </NavLink>
                        <NavLink className="navLinkFooter" to="/coaching">
                            <p>Nos services</p>
                        </NavLink>
                        <NavLink className="navLinkFooter" to="/training">
                            <p>Fondateurs</p>
                        </NavLink>
                    </div>
                    <div className='blockNavigation block-2'>
                        <h3>
                            <p>Aide</p>
                        </h3>
                        <NavLink className="navLinkFooter" to="/advice">
                            <p>Assicstance</p>
                        </NavLink>
                        <NavLink className="navLinkFooter" to="/coaching">
                            <p>Support technique et commercial 7j/7</p>
                        </NavLink>
                    </div>
                    <div className='blockNavigation block-3'>
                        <h3>
                            <p>Nous contacter</p>
                        </h3>
                        <NavLink className="navLinkFooter" to="/advice">
                            <p>3 rue Jea-Moulin, 75014 Paris</p>
                        </NavLink>
                        <NavLink className="navLinkFooter" to="/coaching">
                            <p>bantu-consulting.contact@gmail.com</p>
                        </NavLink>
                        <NavLink className="navLinkFooter" to="/training">
                            <p>+33(0)1 83 26 98 02</p>
                        </NavLink>
                        <NavLink className="navLinkFooter socilasMedias" to="/training">
                            <div>
                                <img src={instagram} alt="" />
                                <img src={linkedin} alt="" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <DeveloperInfoAndPermission/>
        </div>
    );
};
