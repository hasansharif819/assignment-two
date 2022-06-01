import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerClass'>
            {/* <PageTitle title="Footer"></PageTitle> */}
            <div className="name">
                <h2>Bhuiyan Tools</h2>
                <p>Follow on Socialmedia</p>
            </div>
            <div className="contact">
                <h2>Contact</h2>
                <p><strong>Address: </strong>West Dhanmondi, Songkar, Road no 26, Dhaka</p>
                <p><strong>Phone: </strong>+8801640911511</p>
                <p><strong>Fax: </strong>8801640911511</p>
                <p><strong>Mail: </strong>hs.sharif819@gmail.com</p>
                <p><strong>Opening: </strong>Sun-Fri at 10am</p>
            </div>
            <div className="info">
                <h2>Information</h2>
                <p><strong>About Us </strong></p>
                <p><strong>Legal Notice </strong></p>
                <p><strong>Address </strong></p>
                <p><strong>Supplier </strong></p>
            </div>
            <div className="account">
                <h2>My Account</h2>
                <p><strong>Delevery </strong></p>
                <p><strong>Legal Notice </strong></p>
                <p><strong>About Us </strong></p>
                <p><strong>Prices Drops</strong></p>
                <p><strong>NewProducts </strong></p>
                <p><strong>Best Sales</strong></p>
            </div>
            <div className="company">
                <h2>Company</h2>
                <p><strong>My Account</strong></p>
                <p><strong>My Cart</strong></p>
                <p><strong>Identity</strong></p>
                <p><strong>Order</strong></p>
                <p><strong>Contact us</strong></p>
                <p><strong>Address</strong></p>
            </div>
        </div>
    );
};

export default Footer;