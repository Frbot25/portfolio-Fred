import data from './../../data';
import './slider.css';

function slider() {
 
  return (
    <>
    
        <div className='wrapper'>
        
  {data.map((site, index) =>
  <div className='widget' key={index}>

    <img className='widget__photo'  alt='image_site' src={site.image}/>
    <a className='widget__button'  href={`site/${site.id}`}>
    Plus de détails
    </a>
    <div className='widget__details'>
      <div className='widget__badges'>
        <div className='widget__badge'>
        {site.type}
        </div>
            
        {
          site.online === true ? 
          <div className="widget__badge widget__badge--rating" style={{color: "#333", background: "#14c852", borderColor: "#14c852"}}>
          online
        </div>
        :
        <div className="widget__badge widget__badge--rating" style={{color: "#f1f1f1", backgroundColor: "crimson", borderColor: "crimson"}}>
        not online

      </div>
        }
        
      </div>
      <div className='widget__name'>
      {site.name}
      </div>
      {site.technos.map((tech, index) =>
      <img className='widget__type'alt='technos' key={index} src={`images/${tech}.svg`}/>
      )}
      <div className='widget__info'>
        <span className='description'>
        {site.description}
        </span>
        <span className='description'>
          
        </span>
      </div>

    </div>
  </div>
  )}
</div>
    
    </>
  );
}

export default slider;