import React from 'react';
import './card.scss';

const Card = () => {
    return (
        <div className="card">
            <div className="img">
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            <span className='span'></span>
            </div>
        <div className="content">
            <h2>
               Frédéric Botella 
            </h2>
            <h2>
               Dev Full-Stack 
            </h2>
            <h3 style={{color: "#f1f1f1"}}>Ecole O'clock 2021</h3>
            <h4>
                Promo Uther de mai à octobre 2021.
            </h4>
            <h4>
                Certification Opquast :
            </h4>
            <p>Maîtrise de la qualité en projet Web - V4</p>
            <p>DÉLIVRÉ LE : 26 MARS 2022</p>
            
        </div>
    </div>
    );
};

export default Card;