import React from 'react';
import { ArrowCircleRightIcon, ShieldCheckIcon } from '@heroicons/react/solid';
import mans from '../../../assets/image/mans.jpg';


const Products = () => {
    return (
        <div>
        <div className='banner-class'>
            <div className='imageBanner'>
                <img height={500} src={mans} alt="" />
            </div>
            <h2 className='headingClass'>Products and Services</h2>
        </div>
        <div className='checkBox'>
        <p><ShieldCheckIcon height={20}/> Issue Management</p>
            <h4>Coppertech Industries Ltd.</h4>
            <p><ArrowCircleRightIcon height={20}/> <a href="">Prospectus</a></p>
            <p><ArrowCircleRightIcon height={20}/> <a href="">Abridged Version</a></p>
            <h4>Oimex Electrod Ltd.</h4>
            <p><ArrowCircleRightIcon height={20}/> <a href="">Prospectus</a></p>
            <p><ArrowCircleRightIcon height={20}/> <a href="">IPO Application Process</a></p>
            <p><ArrowCircleRightIcon height={20}/> <a href="">List of a IPO Applicants</a></p>
            <p><ArrowCircleRightIcon height={20}/> <a href="">IPO Results</a></p>
            <h4>Zaheen Shopping Ltd.</h4>
                        <p><ArrowCircleRightIcon height={20}/> <a href="">Prospectus</a></p>




            </div>   
        </div>
    );
};

export default Products;