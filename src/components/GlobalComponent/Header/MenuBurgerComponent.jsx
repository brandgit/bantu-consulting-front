import React from 'react';

export const MenuBurgerComponent = ({getMenuBurger, menuBurger}) => {
    return (
        <div className='wrapperMenuBurger'>
            <div className="wrapperButtonMenuBurger">
                <div className="buttonMenuBurger" onClick={getMenuBurger}>
                    <div className={menuBurger}></div>
                    <div className={menuBurger}></div>
                    <div className={menuBurger}></div>
                </div>
            </div>
        </div>
    );
};
