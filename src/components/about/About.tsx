import React from 'react';
import './About.scss';

const About = () => {

    const features = [
        {
            title: 'Brand Recognition',
            description: `Boost your brand reconigtion with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
            icon: 'icon-brand-recognition.svg'
        },

        {
            title: 'Detailed Records',
            description: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
            icon: 'icon-detailed-records.svg'
        },

        {
            title: 'Fully Customizable',
            description: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
            icon: 'icon-fully-customizable.svg'
        },
    ];

    return (

        <div className="about-component-container">
            
            {/* Advanced Statistics */}
            <div>
                <div className="about-title">
                    Advanced Statistics
                </div>

                <div className="about-description">
                    Track how your links are performing accross the web with our advanced statistics dashboard.
                </div>
            </div>

            {/* features */}
            <div className="feature-boxes-container">
                {
                    features.map((feature, i) =>
                        <div key={`About-${i}`}>
                            <div className="feature-box">
                                <div className="feature-icon">
                                    <img alt={feature.title} src={"assets/images/" + feature.icon}></img>
                                </div>
                                <div className="feature-box-title">
                                    {feature.title}
                                </div>
                                <div className="feature-box-description">
                                    {feature.description}
                                </div>
                            </div>

                            {/* <div className="separator">x</div> */}
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default About;