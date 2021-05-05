import React from 'react';
import './Header.scss';
import LinkButton, { LinkButtonSize } from '../linkButton/LinkButton';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="title">
                    More than just shorter links

                    <div className="description">
                        Build your brand&apos;s recognition and get detailed insights on how your links are performing.
                        <br></br>
                        <br></br>
                        <div className="description-button">
                            <LinkButton caption="Get Started" size={LinkButtonSize.Large}></LinkButton>
                        </div>
                    </div>
                </div>
                
                <div className="illustration">
                    <img alt="Illustration" src="assets/images/illustration-working.svg"></img>
                </div>
            </div>
        </div>
    );
};

export default Header;