import React from 'react';
import './AboutUs.css'
import {faHeart, faSuitcaseRolling, faUmbrellaBeach, faPlane} from '@fortawesome/free-solid-svg-icons'
import About from '../About/About';
const aboutUsData = [
    {
        icon : faHeart,
        name : 'HAPPY CLIENTS',
        text : 'Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.'
    },
    {
        icon : faPlane,
        name : 'AMAZING TOUR',
        text : 'Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.'
    },
    {
        icon : faSuitcaseRolling,
        name : 'SUPPORT CASES',
        text : 'Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.'
    },
    {
        icon : faUmbrellaBeach,
        name : 'GOOD RATINGS',
        text : 'Sed sit amet leo orci. Fusce tincidunt accumsan pretium. Donec fermentum, ex non placerat.'
    }
]
const AboutUs = () => {
    return (
        <section className="about-section">
            <div className="about-header text-center">
                <h3>ABOUT US</h3>
                <h2>A Signature Of Excellence</h2>
            </div>
            <div className="about-us">
                {
                    aboutUsData.map(about => <About about={about}></About>)
                }
            </div>
        </section>
    );
};

export default AboutUs;