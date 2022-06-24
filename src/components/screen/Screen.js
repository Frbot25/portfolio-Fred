import React from "react";
import Typewriter from 'typewriter-effect/dist/core';

import './screen.css';
const Screen = () => {
  
    function AnimScreen () {
        
        const textAnim = document.querySelector('.code');
    
    new Typewriter(textAnim, {
        deleteSpeed: 20,
        //loop: true

    })
    // .pauseFor(7000)
    .typeString('hello world !')
    .pause(300)
    .deleteAll()
    .typeString('const <span style="color: #156AE7">user</span> = {<br><span style="color: #8AD6F4">username: </span> "frédéric",<br><span style="color: #8AD6F4">age: </span> 48,<br><span style="color: #8AD6F4">job: </span>" Dev Full-stack",<br><span style="color: #8AD6F4">school: </span>"O\'clock,"<br><span style="color: #8AD6F4">formation: </span> 2021,')
    .typeString('<br>}')
    .pause(300)
    // .pause(5000)
    // .deleteAll()
    // .typeString('<span style="color: #156AE7"> function</span><span style="color: #E0D034"> AnimScreen</span> () {<br>')
    // .pauseFor(300)
    // .typeString('<span style="color: #E0D034"> const</span><span style="color: #15B5F6"> textAnim</span>= document.<span style="color: #E0D034"</span>querySelector(".classname");')
    // .pause(300)
    // //.deleteChars(7)
    // .typeString('<span style="color: #156AE7"> new</span>')
    // .pause(300)
    // //.deleteChars(7)
    // .typeString('<span style="color: #E0D034"> Typewriter</span>(<span style="color: #15B5F6">textAnim</span>, {<br>')
    // .pause(300)
    // .typeString('deleteSpeed:<span style="color: #E0D034"> 20</span>})')
    // .pause(300)
    // .deleteAll()
    .callFunction(() => {
        console.log('const <span style="color: #156AE7">user</span> = {<br><span style="color: #8AD6F4">username: </span> "frédéric",<br><span style="color: #8AD6F4">age: </span> 48,<br><span style="color: #8AD6F4">job: </span>" Dev junior Full-stack",<br><span style="color: #8AD6F4">scool: </span>"O\'clock,"<br><span style="color: #8AD6F4">formation: </span> 2021,');
      })
    .start()
    }
    document.addEventListener('DOMContentLoaded', function() {
        console.log('je lancs l\'animation du text screen!');
        AnimScreen()
      });
    return (
        <div className="content-screen">
                <div className="screen">
                <div className="code">

                </div>
                
                
            </div>
        </div>
            
    );
};


export default Screen;