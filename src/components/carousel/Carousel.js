import React from 'react';
import './carousel.css';
import FlecheGauche from './../../assets/images/fleche-gauche.png';
import FlecheDroite from './../../assets/images/fleche-droite.png';
import data from './../../data';

const Carousel = () => {
  var cellCount = 6;
  var selectedIndex = 0;

  function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    console.log(angle);
    document.querySelector('.carousel').style.transform = 'translateZ(-60px) rotateY(' + angle + 'deg)';
  }
  const handleClickPrevious = () => {
    selectedIndex= selectedIndex - 1;
    console.log(document.querySelector('.site-title'));
    rotateCarousel();
  }
  const handleClickNext = () => {
    selectedIndex= selectedIndex + 1;
    console.log(document.querySelector('.site-title'));
    
    rotateCarousel();
  }
  
    return (
      <>
      <div className="scene">
        <div className="carousel" id='carousel'>
        {data.map((site) =>
        <div className="carousel__cell" key={site.id}>
          <div className="site-content">
          <h2 className='site-title'>{site.name}</h2>
          </div>
          <div className="site-image">
          <a href={`site/${site.id}`}>
          
            <img className='image' key={site.id} src={process.env.PUBLIC_URL + `${site.image}`} alt="logo" />
          </a>
          </div>
              <div className="site-content">
                <div className="technologies" >
                  {site.technos.map((type,ind) => 
                    
                    <img className='tech'key={type} src={`/images/${type}.svg`} alt="techno" />
                )}
                  {
                    site.type === "front" ? <p className='carousel-p'><span style={{color: "red"}}>{site.type}</span></p> :
                    <p className='carousel-p'><span style={{color: "green"}}>{site.type}</span></p>
                  }
                  
                </div>
                <p className='site-description'>{site.description}</p>
                <div className="site-boutonDetail">
                <a className='site-bouton' href={`site/${site.id}`}>Détail</a>
                </div>
                
              </div>
              
            </div>
            
      )}
        
        </div>
        
        </div>
        <div className="control">
        <img src={FlecheGauche} className="next-button" alt='fleche gauche' onClick={handleClickPrevious}/>
       <img src={FlecheDroite} className="previous-button" alt='fleche droite' onClick={handleClickNext}/>
        </div>

      </>
        
    );
};

export default Carousel;