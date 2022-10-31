import React from 'react';
// import logo from "../../assets/logoApp/logoAppSvg2.svg";
import logo from "../../assets/logoApp/logoAppPng.png";

export const LogoComponent = () => {
    return (
        <div className='wrapperLogoHeader'>
            <img className='logoSvg' src={logo} alt="" />
        </div>
    );
};
