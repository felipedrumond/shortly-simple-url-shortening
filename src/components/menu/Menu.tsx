import React, { useState } from 'react';
import LinkButton, { LinkButtonSize } from '../linkButton/LinkButton';
import './Menu.scss';

const Menu = () => {

    const [openMenu, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState(!openMenu);
    }

    return (
        
        <div>
            <div onClick={toggleMenu} className="menu-icon fa fa-bars"></div>
            <div className="menu-component-container">
                <div>
                    <img alt="logo "className="logo" src="assets/images/logo.svg" />
                </div>

                <div className={"links-container " + (openMenu ? 'open' : '') }>
                    <div>
                        <a href="#/">
                            Features 
                        </a>
                    </div>
                    <div>
                        <a href="#/">
                            Pricing
                        </a>
                    </div>
                    <div className="menu-resources">
                        <a href="#/">
                            Resources
                        </a>
                    </div>
                    
                    <hr></hr>

                    <div>
                        <a href="#/">
                            Log in
                        </a>
                    </div>
                    <div className="menu-button-container">
                        <LinkButton caption="Sign Up" size={LinkButtonSize.Large}></LinkButton>
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default Menu;