import React from "react";
import { HeaderComponent } from '../../GlobalComponent/Header/HeaderComponent';
const videoBgTopHome = require("../../../assets/videosApp/videoBackgroundTopHome.mp4")
export const TopHomeComponent = () => {

    return (
        <div className='wrapperTopHome'>
             <HeaderComponent/>
             <div className="ourValuesContainer">
                <div>
                    <h1 className="nREText">Nos valeurs</h1>
                    <p className="nRETextH2">Simplicité, Clarté, Accompagnement,</p>
                    <p className="nRETextH2">Collaboration</p>
                </div>
             </div>
            <video className="videoBgTopHome" src={videoBgTopHome} autoPlay loop muted />
        </div>
    );
};
