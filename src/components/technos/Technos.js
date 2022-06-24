import Js from './../../assets/images/javascript.svg';
import PostgresQl from './../../assets/images/postgresql.svg';
import MongoDb from './../../assets/images/mongodb.svg';
import React from './../../assets/images/react.svg';
import Redux from './../../assets/images/redux.svg';
import Github from './../../assets/images/github.svg';
import Css from './../../assets/images/css3.svg';
import Sass from './../../assets/images/sass.svg';
import Nodejs from './../../assets/images/nodejs.svg';
import Html5 from './../../assets/images/html-5.svg';
import Sql from './../../assets/images/sql.png';
import Notion from './../../assets/images/notion.svg';
//import Html5 from './../../assets/images/html-5.svg';

import './technos.css';

const Technos = () => {
    return (
        <div className="items">
        <div className="item">
            <img className='logo-items' src={Js} alt="logo" />
            <div className="titre">
            <h3>Javascript</h3>
            </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={PostgresQl} alt="logo" />
            <div className="titre">
            <h3>PostgresQl</h3>
            </div>
        </div>
        <div className="item">
            <img className='logo-items' src={React} alt="logo" />
            <div className="titre">
            <h3>Réact</h3>
            </div>
        </div>
        <div className="item">
            <img className='logo-items' src={MongoDb} alt="logo" />
            <div className="titre">
            <h3>MongoDB</h3>
            </div>
        </div>
        <div className="item">
            <img className='logo-items' src={Redux} alt="logo" />
                <div className="titre">
                <h3>Rédux</h3>
                </div>
        </div>
        <div className="item">
            <img className='logo-items' src={Github} alt="logo" />
                <div className="titre">
                <h3>Github</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Css} alt="logo" />
                <div className="titre">
                <h3>Css</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Sass} alt="logo" />
                <div className="titre">
                <h3>Sass</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Nodejs} alt="logo" />
                <div className="titre">
                <h3>NodeJs</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Html5} alt="logo" />
                <div className="titre">
                <h3>Html 5</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Sql} alt="logo" />
                <div className="titre">
                <h3>Sql</h3>
                </div>
            
        </div>
        <div className="item">
            <img className='logo-items' src={Notion} alt="logo" />
                <div className="titre">
                <h3>Notion</h3>
                </div>
            
        </div>

    </div>


    );
};

export default Technos;