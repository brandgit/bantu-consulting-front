import React from "react";
import { FooterComponent } from "../../components/GlobalComponent/Footer/FooterComponent";
import MainNosServicesComponent from "../../components/GlobalComponent/MainNosServicesComponent";
import {nosConseilsItems1, nosConseilsItems2} from "../../assets/stockages/Stockages"
import { TopNosServiceComponent } from '../../components/GlobalComponent/TopNosServiceComponent';
const imageTop = require('../../assets/imagesApp/Conseils.jpg')
const iconService = require("../../assets/iconsApp/conseil.png")

export const AdviceScreen = () => {
    return (
        <div className='wrapperAdvice'>
           <TopNosServiceComponent nameScreen = "Nos conseils" imageTop={imageTop} bg="imageBgTopNosServices"/>
           <MainNosServicesComponent iconService={iconService} nosServicesItems1={nosConseilsItems1} nosServicesItems2={nosConseilsItems2} service="conseils"/>
           <FooterComponent/>
        </div>
    );
};