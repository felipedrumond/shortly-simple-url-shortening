import React, { useState } from 'react';
import LinkButton, { LinkButtonShape, LinkButtonTheme } from '../../linkButton/LinkButton';
import './UrlItem.scss';

export interface IUrlItemProps {
    originalLink: string,
    shortLink: string,
}

const UrlItem = (props: IUrlItemProps) => {
    
    const [buttonState, setButtonCaption] = useState({ caption: 'Copy', theme: LinkButtonTheme.Normal });

    const onClick = () => {
        navigator.clipboard.writeText(props.shortLink);
        setButtonCaption({ caption: 'Copied!', theme: LinkButtonTheme.Dark });
    }

    return (
        <div className="url-item">
            <div className="original-link">
               { props.originalLink }
            </div>
            <div className="short-link">
                { props.shortLink }
            </div>
            <div className="actions-container">
                <LinkButton
                    caption={buttonState.caption}
                    shape={LinkButtonShape.Square}
                    theme={buttonState.theme}
                    onClick={onClick}
                    ></LinkButton>
            </div>
        </div>
    );
};

export default UrlItem;