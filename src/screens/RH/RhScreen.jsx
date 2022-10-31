import React from 'react';
import { FooterComponent } from '../../components/GlobalComponent/Footer/FooterComponent';
import { ResustsComponent } from '../../components/GlobalComponent/ResustsComponent';
import {TopNosServiceComponent} from "../../components/GlobalComponent/TopNosServiceComponent";
import {resultsItems} from "../../assets/stockages/Stockages"
const imageTop = require("../../assets/imagesApp/vectorRH.jpg")

export const RhScreen = () => {
    return (
        <div>
           <TopNosServiceComponent imageTop={imageTop} 
           nameScreen="Nos conseils RH"/>
            <ResustsComponent resultsItems={resultsItems}/>
           <FooterComponent/>
        </div>
    );
};
