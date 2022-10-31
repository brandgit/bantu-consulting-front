import React from "react";
import { FooterComponent } from "../../components/GlobalComponent/Footer/FooterComponent";
import MainNosServicesComponent from "../../components/GlobalComponent/MainNosServicesComponent";
import { TopNosServiceComponent } from '../../components/GlobalComponent/TopNosServiceComponent';
import {nosCoachingItems1, nosCoachingItems2} from "../../assets/stockages/Stockages"
const iconService = require("../../assets/iconsApp/trainning.png")
const imageTop = require('../../assets/imagesApp/Coaching.jpg')

export const CoachingScreen = () => {
    return (
        <div className='wrapperCoaching'>
            <TopNosServiceComponent nameScreen = "Nos coaching" imageTop={imageTop}/>
            <MainNosServicesComponent iconService={iconService} nosServicesItems1={nosCoachingItems1} nosServicesItems2={nosCoachingItems2} service="conseils"/>
            <FooterComponent/>
        </div>
    );
};
