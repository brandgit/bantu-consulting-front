import React from "react";
import { FooterComponent } from "../../components/GlobalComponent/Footer/FooterComponent";
import MainNosServicesComponent from "../../components/GlobalComponent/MainNosServicesComponent";
import { TopNosServiceComponent } from '../../components/GlobalComponent/TopNosServiceComponent';
import {nosFormationsItems1, nosFormationsItems2} from "../../assets/stockages/Stockages"
const iconService = require("../../assets/iconsApp/formation.png")
const imageTop = require('../../assets/imagesApp/Formations.jpg')

export const TrainingScreen = () => {
    return (
        <div className='wrapperTraining'>
            <TopNosServiceComponent nameScreen = "Nos formations" imageTop={imageTop} bg="imageBgTopNosServices"/>
            <MainNosServicesComponent iconService={iconService} nosServicesItems1={nosFormationsItems1} nosServicesItems2={nosFormationsItems2} service="conseils"/>
            <FooterComponent/>
        </div>
    );
};
