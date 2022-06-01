import React from 'react';
import bg from '../../assets/image/bg.jpg';
import { ShieldCheckIcon } from '@heroicons/react/solid'

import './About.css';

const About = () => {
    return (
        <div>
        <div className='banner-class'>
            <div className='imageBanner'>
                <img height={500} src={bg} alt="" />
            </div>
            <h2 className='headingClass'>About us</h2>
        </div>
        <div className='checkBox'>
        <p><ShieldCheckIcon height={20}/> Capital Profile</p>
        <p><ShieldCheckIcon height={20}/> Mission & Vission</p>
        <p><ShieldCheckIcon height={20}/> Board of Directors</p>
        <p><ShieldCheckIcon height={20}/> MAnagement/Executive</p>
        <p><ShieldCheckIcon height={20}/> Circulation</p>
        <p><ShieldCheckIcon height={20}/> Career Opportunity</p>
        <p><ShieldCheckIcon height={20}/> Contacts</p>  
        </div>      
        </div>
    );
};

export default About;