import React from 'react';
import Email from './../../assets/images/mail.png'
import './mail.css';

const Mail = () => {
    return (
        <div className="box-black">
             <div className='mail-box'>
            <h2>Contact Moi !</h2>
            <p>clique sur l'enveloppe</p>
            <a href="/contact" >
            <img src={Email} alt="emaillogo" />
            </a>
            
        </div>
        </div>
       
    );
};

export default Mail;