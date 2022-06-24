import React from 'react';
import Linkedin from './../../assets/images/linkedin2.svg';
import Facbook from './../../assets/images/facebook2.svg';
import Instagram from './../../assets/images/instagram2.svg';
import Twitter from './../../assets/images/twitter2.svg';
import Github from './../../assets/images/github2.svg';
import './social.css';

const social = () => {
    return (
        <div className="media-container">
                    <div className="media-btn"><a href="https://github.com/Frbot25" target='_blank' rel="noreferrer">
                        <img  src={Github} alt="icone github" className="icones" />
                        </a>
                        
                        </div>
                    <div className="media-btn"><a href="https://twitter.com/Frbot25" target='_blank' rel="noreferrer">
                        <img src={Twitter} alt="icone twitter" className="icones" />
                        </a>
                        </div>
                    <div className="media-btn"><a href="https://www.instagram.com/frbot25/?hl=fr" target='_blank' rel="noreferrer">
                    
                        <img src={Instagram} alt="icone instagram" className="icones" />
                        </a>
                        </div>
                    <div className="media-btn"><a href="https://www.facebook.com/frederic.botella.3"target='_blank' rel="noreferrer" >
                        <img src={Facbook} alt="icone facebook" className="icones" />
                        </a>
                        </div>
                    <div className="media-btn"><a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-botella-6564b3124/" target='_blank' rel="noreferrer">
                        <img src={Linkedin} alt="icone linkedin" className="icones" />
                        </a>
                        </div>
                       

                </div>
    );
};

export default social;