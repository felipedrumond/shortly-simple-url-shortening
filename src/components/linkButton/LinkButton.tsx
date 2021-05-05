import React from 'react';
import './LinkButton.scss';

const LinkButton = (props: ILinkButtonProps) => {

    const classNames = `link-button 
     ${(props.size || LinkButtonSize.Normal)} 
     ${(props.shape || LinkButtonShape.Normal)} 
     ${(props.theme || LinkButtonTheme.Normal)}`;

    const handleClick = () =>  {
        if (!props.loading) {
            props.onClick && props.onClick();
        }
    }

    return (
        <div
            className={classNames}
            onClick={handleClick}
        >
            { !props.loading && <span>{props.caption}</span> }
            { props.loading && <div className="loading-spinner"></div> }
        </div>
    );
};

export default LinkButton;

export enum LinkButtonSize {
    Normal = '',
    Large = 'large'
}

export enum LinkButtonShape {
    Normal = '',
    Square = 'square'
}

export enum LinkButtonTheme {
    Normal = '',
    Dark = 'dark'
}

export interface ILinkButtonProps {
    caption: string,
    size?: LinkButtonSize,
    shape?: LinkButtonShape,
    theme?: LinkButtonTheme
    onClick?: () => void,
    loading?: boolean
}