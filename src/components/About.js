import React from 'react';
import Ecriture from './ecriture/Ecriture';

const About = () => {
    return (
        <div className='mentions-container'>
            <div className="about__content">

            <div className='content__black'>
                {/* <div className="about__card">
                   
                    
                </div> */}
                
                {/* <div className="box__black">
                    
                    
                </div> */}

            
                <Ecriture />
                <div className="about">
                   <h3>Informations personnelles :</h3>
                   <hr/>
                   <ul className='about about_ul'>
                       <li className='about about_li'>Frédéric Botella</li>
                       <li className='about about_li'>Développeur Full-Stack</li>
                       <li className='about about_li'><a href="mailto:">frederic.botella@gmail.com</a></li>
                       
                   </ul>
                   <h3>Formation :</h3>
                   <hr/>
                   <p>Formation à l'école O'clock du 02/05/2021 au 15/10/2021.</p>
                   <h3>Examen :</h3>
                   <hr/>
                   <h3>Maîtrise de la qualité en projet Web - V4</h3>
                   <ul className='about about_ul'>
                       <li className='about about_li'>Score :	735 /1000</li>
                       <li className='about about_li'>Délivré le :	26 mars 2022</li>
                       <a href="https://directory.opquast.com/fr/certificat/T1GZW9/" target="_blank" rel="noreferrer">Ma certification</a>
                   </ul>
                   <h3>Titre professionnel Développeur web et web mobile :</h3>
                   <h3>En attente d'inscription !</h3>
                </div>
                
            </div>
        </div>
        </div>
        
    );
};

export default About;