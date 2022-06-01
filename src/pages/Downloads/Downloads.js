import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/solid';
import d from '../../assets/image/d.webp';


const Downloads = () => {
    return (
        <div>
            <div className='banner-class'>
            <div className='imageBanner'>
                <img height={500} src={d} alt="" />
            </div>
            <h2 className='headingClass'>Downloads</h2>
        </div>
        <div className='checkBox'>
            <h2>Forms</h2>
        <p><ShieldCheckIcon height={20}/> All Forms</p>
        <h2>Notice / Circular</h2>
        <p><ShieldCheckIcon height={20}/> BSEC</p> 
        </div> 
        </div>
    );
};

export default Downloads;