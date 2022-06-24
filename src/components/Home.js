import React from 'react';
import Card from './../components/card/Card';
import Technos from './technos/Technos';
import Social from './../components/social/social';
import Fumee from './fumee/Fumee';



const Home = () => {
    // function AnimText () {
    //     const textAnim = document.querySelector('h1');
    // new Typewriter(textAnim, {
    //     deleteSpeed: 25

    // })
    // .typeString('Hello moi c\'est Frédéric.<br> Dev')
    // .pauseFor(300)
    // .typeString('<span style="color: #E1520F"> Front</span> !')
    // .pause(300)
    // .deleteChars(7)
    // .typeString('<span style="color: #1B9764"> Back</span> !')
    // .pause(300)
    // .deleteChars(7)
    // .typeString('<span style="color: #040FF3"> Full-Stack</span> !')
    // .start()
    // }
    // document.addEventListener('DOMContentLoaded', function() {
    //     console.log('je lancs l\'animation du text !');
    //     AnimText()
    //   });
        return (
        <>
            <div>

            <h1>Hello moi c'est Frédéric Dev <span style={{color: "#040FF3"}}>Full-Stack</span></h1>
            
            <a href="/projets" className='btn'>Projets</a>
            <Social />
                <div className="home-content">
               
                <Card /> 
                 {/* <Screen /> */}
                {/* <Ecriture /> */}
                
                
                </div><div className="technos">
                <Technos />
                </div>
                
                <div className="media">
                
                </div>
                <Fumee />
                
                {/* <Counter /> */}
            </div>
            
                    
        </>
    );
};

export default Home;