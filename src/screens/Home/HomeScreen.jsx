import React from "react";
import { FooterComponent } from "../../components/GlobalComponent/Footer/FooterComponent";
import { MainHomeComponent } from '../../components/Home/MainHome/MainHomeComponent';
import { TopHomeComponent } from '../../components/Home/TopHome/TopHomeComponent';

export const HomeScreen = () => {
 

    return (
        <div className='wrapperHomeScreen'>
           <TopHomeComponent />
           <MainHomeComponent/>
           <FooterComponent/>
        </div>
    );
};
