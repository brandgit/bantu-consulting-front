import React from 'react';
import { NavLink } from "react-router-dom";

export const NousContactez = () => {
    return (
        <div className='wrapperNousContactez'>
            <div className='nousContactezContainer'>
                <div className="wrapperTextServicePresentation">
                    <p>Un question sur un de nos services, besoin de plus de détails ?</p>
                </div>
                <div className='wrapperBtnContactezNousSP'>
                    <NavLink className="btnContactezNousSPLink" to={"advice"}>
                        <div className="btnContactezNousSP">
                            <p>Contactez-nous!</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='contentServicePresentation'>
                 
            </div>
                {/* <div className='wrapperButtonContactezNous'>

<div className="wrapperText">
     <p>Un question sur un de nos services, besoin de plus de détails ?</p>
 </div>
 <NavLink className="btnContactezNous" to={"advice"}>
     <div className="buttonContactezNous">
         <p>Contactez-nous!</p>
     </div>
 </NavLink>
</div>
<div className='contentServicePresentation'> </div> */}
        </div>
    );
};