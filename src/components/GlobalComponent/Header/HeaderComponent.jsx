import React, { useState } from "react";
import { NavBarHeader } from '../../../routes/NavBarHeader';
import { ButtonProfile } from './ButtonProfile';
import { LogoComponent } from '../LogoComponent';
import { MenuBurgerComponent } from './MenuBurgerComponent';
import { NavBarMenuBurger } from "../../../routes/NavBarMenuBurger";
import { NavBarMyPrfile } from "../../../routes/NavBarMyPrfile";

export const HeaderComponent = () => {

    const [menuBurger, setMenuBurger] = useState("burgerBar unclicked");
    const [navigationMenuBurger, setNavigationMenuBurger] = useState(
      "wrapperNavigationMenuBurger hidden"
    );
    
    const [isMenuBurgerClicked, setIsMenuBurgerClicked] = useState(false);
  
    const getMenuBurger = () => {
      if (!isMenuBurgerClicked) {
        setMenuBurger("burgerBar clicked");
        setNavigationMenuBurger("wrapperNavigationMenuBurger visible");
      } else {
        setMenuBurger("burgerBar unclicked");
        setNavigationMenuBurger("wrapperNavigationMenuBurger hidden");
      }
  
      setIsMenuBurgerClicked(!isMenuBurgerClicked);
    };
  
    const [navigationMyProfile, setNavigationMyProfile] = useState(
      "wrapperNavigationConnexion hidden"
    );
    const [isNavigationMyProfileClicked, setIsNavigationMyProfileClicked] =
      useState(false);
  
    const getButtonMyProfile = () => {
      if (!isNavigationMyProfileClicked) {
        setNavigationMyProfile("wrapperNavigationConnexion visible");
      } else {
        setNavigationMyProfile("wrapperNavigationConnexion hidden");
      }
  
      setIsNavigationMyProfileClicked(!isNavigationMyProfileClicked);
    };


    return (
        <div className='wrapperHeader'>
            <div className='headerContainer'>
                <MenuBurgerComponent getMenuBurger={getMenuBurger} menuBurger={menuBurger}/>
                <LogoComponent/>
                <NavBarHeader/>
                <ButtonProfile getButtonMyProfile={getButtonMyProfile}/>
            </div>
            <NavBarMenuBurger navigationMenuBurger={navigationMenuBurger} />
            <NavBarMyPrfile navigationMyProfile={navigationMyProfile}/>
        </div>
    );
};
