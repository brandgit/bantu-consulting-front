import React from 'react';
import { FooterComponent } from '../../components/GlobalComponent/Footer/FooterComponent';
import { ResustsComponent } from '../../components/GlobalComponent/ResustsComponent';
import {TopNosServiceComponent} from "../../components/GlobalComponent/TopNosServiceComponent";
import {resultsItems} from "../../assets/stockages/Stockages"
import { ServicePresentation } from '../../components/GlobalComponent/ServicePresentation';
import { NousContactez } from '../../components/GlobalComponent/NousContactez';
const imageTop = require("../../assets/imagesApp/vectorRH.jpg")

export const DeveloppementPersonnelScreen = () => {
    return (
        <div>
           <TopNosServiceComponent imageTop={imageTop} 
           nameScreen="Nos coaching en DeveloppementPersonnel" bg="imageBgTopNosServices-no"/>
            <ServicePresentation/>
            <ResustsComponent resultsItems={resultsItems}/>
            <NousContactez/>
           <FooterComponent/>
        </div>
    );
};
