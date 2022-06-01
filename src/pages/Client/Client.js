import React from 'react';
import world2 from '../../assets/image/world2.webp';
import r1 from '../../assets/image/r1.webp';
import w1 from '../../assets/image/w1.jpg';
import './Client.css';
import { ShieldCheckIcon } from '@heroicons/react/solid';


const Client = () => {
    return (
        <div>
            <div className='banner-class'>
            <div className='imageBanner'>
                <img height={500} src={world2} alt="" />
            </div>
            <h2 className='headingClass'>Become a Client</h2>
        </div>
        <div className='checkBox'>
        <p><ShieldCheckIcon height={20}/> Bangladeshi Individuals</p>
        <p><ShieldCheckIcon height={20}/> Bangladeshi Institutions</p>
        <p><ShieldCheckIcon height={20}/> Foreign Investors</p>
        <p><ShieldCheckIcon height={20}/> NRBs</p> 
        </div> 

        <div className='banner-class'>
            <div className='imageBanner'>
                <img height={500} src={r1} alt="" />
            </div>
            <h2 className='headingClass'>Research</h2>
        </div>
        <div className='checkBox'>
        <p><ShieldCheckIcon height={20}/> Daily Market Commentary</p> 
        </div>
            
        </div>
    );
};

export default Client;