import React from 'react';
import { CgProfile } from "react-icons/cg";

export const ButtonProfile = ({getButtonMyProfile}) => {
    return (
        <div className='wrapperButtonProfile'>
            <div className="buttonConnexion" 
             onClick={getButtonMyProfile}
            >
                <CgProfile className="iconProfile" />
                <p className="mySpace">Mon espace</p>
            </div>
        </div>
    );
};
