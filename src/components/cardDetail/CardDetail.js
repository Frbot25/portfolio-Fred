import React from 'react';
import data from './../../data';
import { useParams } from 'react-router-dom';
import './cardDetail.css';

const CardDetail = () => {
    let { id } = useParams();
    id = id - 1;
    return (
        <>  <div className="cardDetail">
                <div className="cardDetail-container">
                <h1 className="cardDetail-title">{data[id].name}</h1>
                <a href={data[id].link} target="_blank" rel="noreferrer"><img className='detailCard-img' src={data[id].image} alt="" /></a>
                <h2 className="cardDetail-title">description</h2>
                <div className="cardDetail-description">
                    
                {data[id].description}
                </div>
                <div className="cardBouton">
                <a className='cartDetail-button' href={data[id].link} target="_blank" rel="noreferrer">Visiter le site</a>
                </div>
                <div className="cardDetail-titletech">
                <h2 className='cardDetail-titleTechnos'>technos principales</h2>
                <h2 className='cardDetail-titleTechDetail'>librairies utilisées</h2>
                </div>
                
                <div className="cardDetail-technologies">
                 
                    {data[id].technos.map((type,ind) => 
                    
                    <div className='cardDetail-boxTech'>
                    <img className='cardDetail-tech' key={ind.key} src={`/images/${type}.svg`} alt="techno" />
                    <span className='cardDetail-techDesc'>{type = type[0].toUpperCase() +  type.slice(1) }</span>
                    </div>
                )}
                    
                    </div>
                    
                    <div className="cardDetail-techSecondaire">
                    
                    <ul className='cardDetail-ul'>
                    {data[id].libs.map((lib,ind) => 
                        <div>                                                                               
                        <li className='cardDetail-li' key={ind.key}>{lib}</li>
                        </div> 
                    )}
                    </ul>
                </div>
                <div className="detail">
                    <h2>Détail de l'application</h2>
                    <p>{data[id].detail}</p>
                    <div className="cardBouton">
                <a className='cartDetail-button' href="javascript:window.history.go(-1)">[ Retour ]</a>
                </div>
                
                </div>
               
            </div>
        </div>
            
        </>

        
        
     
    );
};

export default CardDetail;