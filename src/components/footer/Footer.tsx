import React from 'react';
import './Footer.scss';

const Footer = () => {

    const features =  {
        name: 'Features',
        links: [
            {
               name: 'Links Shortening',
               url: '#'
            },
            {
                name: 'Branded Links',
                url: '#'
            },
            {
                name: 'Analytics',
                url: '#'
            },
        ]
    };

    const resources = {
        name: 'Resources',
        links: [
            {
               name: 'Blog',
               url: '#'
            },
            {
                name: 'Developers',
                url: '#'
            },
            {
                name: 'Support',
                url: '#'
            },
        ]
    };

    const company =  {
        name: 'Company',
        links: [
            {
               name: 'About',
               url: '#'
            },
            {
                name: 'Our Team',
                url: '#'
            },
            {
                name: 'Carrers',
                url: '#'
            },
            {
                name: 'Contact',
                url: '#'
            },
        ]
    };

    const menus = [features, resources, company];
    const socialMedia = [
        {
            name: 'Facebook',
            icon: 'icon-facebook.svg',
            url: '#'
        },
        {
            name: 'Instagram',
            icon: 'icon-instagram.svg',
            url: '#'
        },
        {
            name: 'Pinterest',
            icon: 'icon-pinterest.svg',
            url: '#'
        },
        {
            name: 'Twitter',
            icon: 'icon-twitter.svg',
            url: '#'
        },
    ]
    
    return (
        <div className="footer-component-container">
            
            {/* logo */}
            <div className="shortly-logo">Shortly</div>

            {/* links */}
            <div className="menus-container">
                {
                    menus.map(menu =>
                        <div className="menu-container" key={menu.name}>
                            <div className="menu-name">{menu.name}</div>
                            {
                                menu.links.map((link, i) =>
                                    <div className="menu-link-container" key={i}>
                                        <a className="menu-link" href="#/">
                                            {link.name}
                                        </a>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>

            {/* social media */}
            <div className="social-media">
                {
                    socialMedia.map((sm, i) =>
                        <a key={i}
                            href={sm.url}
                            title={sm.name}
                            >
                            <img alt={sm.name} src={"assets/images/" + sm.icon}></img>
                        </a>
                    )
                }
            </div>

        </div>
    );
};

export default Footer;