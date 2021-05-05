import React from 'react';
import LinkButton, { LinkButtonSize } from '../linkButton/LinkButton';

import './Boost.scss';

const Boost = () => {
    return (
        <div className="boost-component-container"
            style={{ 
                backgroundImage: `url('assets/images/bg-boost-desktop.svg')`
            }}
        >
            Boost your links today
            <LinkButton caption="Get Started" size={LinkButtonSize.Large}></LinkButton>
        </div>
    );
};

export default Boost;