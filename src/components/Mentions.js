import React from 'react';

const Mentions = () => {
    return (
        <div className='mentions-container'>
            <div className="mentions__content">
                <div className="mention__contentTitle">
                <h1 className='mention__title'>Mentions légales</h1>
                </div>
                    <div className='mention__Item'>
                        <h3 className='item__h3'>Icones libre de droit utilisées :</h3>
                        <span className='item__span'><a className='item__a' href='https://icones8.fr/' target="_blank" rel="noreferrer">icone8</a></span>
                    </div>
                    <div className='mention__item'>
                        <h3 className='item__h3'>Images libre de droit utilisées :</h3>
                        <span className='item__span'><a className='item__a' href='https://pixabay.com' target="_blank" rel="noreferrer">pixabay</a></span>
                    </div>
                    <ul className='mention__ul'>
                        <li className='mention__li'><span className='mention__li mention__span'>Utilistaion du site</span></li>
                        <p>Identité de l'hébergeur: surge.sh
                            <br/> prénom: Frédéric
                            <br/> Nom : Botella
                            <br/> adresse Email: frederic.botella@gmail.com</p>
                        <li className='mention__li'>RGPD</li>
                        <p>Le site portfolio-fb.surge.sh peut vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Vous êtes libre d'accepter ou de refuser, cela n'entraine en aucun cas l'imposibilité d'acceder au site.</p>
                        <li className='mention__li'>© Copyright</li>
                        <p>Le contenu de ce site est progégé, vous ne pouvez pas réutiliser les images non libre de droit (photo de ma personne).</p>
                    </ul>

            </div>
            
        </div>
    );
};
 
export default Mentions;