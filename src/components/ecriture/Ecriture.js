import React from "react";
import Typewriter from 'typewriter-effect/dist/core';

import './ecriture.css';
const Ecriture = () => {
  
    function AnimScreen () {
        
        const textAnim = document.querySelector('.ecriture-code');
    
    new Typewriter(textAnim, {
        deleteSpeed: 20,
        //loop: true

    })
    // .pauseFor(7000)
    .typeString('A propos de moi !')
    .pause(300)
    .start()
    }
    document.addEventListener('DOMContentLoaded', function() {
        console.log('je lancs l\'animation du text screen!');
        AnimScreen()
      });
    return (
        <div className="content-ecriture">
                <div className="ecriture">
                <div className="ecriture-code">

                </div>
                
                
            </div>
        </div>
            
    );
};


export default Ecriture;