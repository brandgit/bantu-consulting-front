import React from "react";
import { FooterComponent } from "../../components/GlobalComponent/Footer/FooterComponent";
import MainNosServicesComponent from "../../components/GlobalComponent/MainNosServicesComponent";
import { TopNosServiceComponent } from '../../components/GlobalComponent/TopNosServiceComponent';
import {nosPilotageDeProjetsItems1, nosPilotageDeProjetsItems2} from "../../assets/stockages/Stockages"
const iconService = require("../../assets/iconsApp/pilotageDeProjet.png")
const imageTop = require('../../assets/imagesApp/PilotagesDeProjets.jpg')

export const ProjectManagementScreen = () => {
    return (
        <div className='wrapperProjectManagementScreen'>
            <TopNosServiceComponent nameScreen = "Nos pilotages de projet" imageTop={imageTop}/>
            <MainNosServicesComponent iconService={iconService} nosServicesItems1={nosPilotageDeProjetsItems1} nosServicesItems2={nosPilotageDeProjetsItems2} service="conseils"/>
            <FooterComponent/>
        </div>
    );
};
