import React from 'react';
import { NavLink } from "react-router-dom";
// import { CgHome } from "react-icons/cg";

export const NavBarHeader = () => {
    return (
        <div className='wrapperNavBarHeader'>
            <div className='navBarHeaderContainer'>
                <div>
                    <NavLink className="navLinkHeader" to="/home">
                        <p>Accueil</p>
                    </NavLink>
                    <NavLink className="navLinkHeader" to="/advice">
                        <p>Conseils</p>
                    </NavLink>
                    <NavLink className="navLinkHeader" to="/coaching">
                        <p>Coaching</p>
                    </NavLink>
                    <NavLink className="navLinkHeader" to="/training">
                        <p>Formations</p>
                    </NavLink>
                    <NavLink className="navLinkHeader" to="/projectManagement">
                        <p>Pilotage de projets</p>
                    </NavLink>
                </div>
            </div>
              {/* <NavLink className="nav-link-Header" to="/home">
            
            <CgHome className="iconHome" />
          </NavLink>
          <NavLink className="nav-link-Header" to="/advice">
            <li>Advice</li>
          </NavLink>
          <NavLink className="nav-link-Header" to="/training">
            <li>Training</li>
          </NavLink>
          <NavLink className="nav-link-Header" to="/coaching">
            <li>Coaching</li>
          </NavLink>
          <NavLink className="nav-link-Header" to="/projectManagement">
            <li>Project Management</li>
          </NavLink> */}
        </div>
    );
};
