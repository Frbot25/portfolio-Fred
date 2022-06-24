import React from 'react';
import countapi from "countapi-js";
import "./counter.css";


function Counter ()  {
const myNamespace = "localhost";
const MY_KEY = "uniqueVisits";
const counterElement = document.querySelectorAll(".span__item");
console.log(counterElement)
    // Initially we need to create namespace & key
// By key I mean see the comments below
// in any index.js terminal run below .create
// request once to tie namespace with key and UUID.
// Also to enable key reset. value defaults to 1

/*  .create TEMPLATE:
countapi.create({
    namespace: www.mysite.com,
    key: 'clicks', 'uniqueVisitors', etc.
    enable_reset: 1 // will enable changing that key
}).then(result => console.log(result)).catch(error => console.log(error))
*/
// https://codesandbox.io/s/site-visitor-counter-ci4nn?file=/src/styles.css:0-424
// in countapi.get(namespace, key), key refers
// to arbitrary designation chosen by me (e.g.
//  'gatavebuli', 'shemosuli', 'visited' etc.)
// and not the UUID. the documentation is lousy
    const getCount = async () => {
        const result = await countapi.get(myNamespace, MY_KEY);
        console.log(result);
        displayCount(result.value);
      };
      
      const incrementCount = async () => {
        const result = await countapi.hit(myNamespace, MY_KEY);
        console.log(result);
        displayCount(result.value);
      };
      
      const displayCount = async (count) => {
        let initialFormat = count.toString().padStart(6, "0");
        console.log(initialFormat);
       await counterElement.forEach((span, index) => {
          console.log(span.value)
          span.innerHTML =  initialFormat[index];
        });
      };
      
      

        if (!localStorage.getItem("repeatVisitor")) {
          console.log("key not created yet");
          incrementCount();
         
          localStorage.setItem("repeatVisitor", true);
        } else if(localStorage.getItem("repeatVisitor")) {
          console.log("existing viewer, displaying w/o incrementing");
          getCount();
        }

    return (
        <div className='counter-container'>
            <div className="message">Unique Visits to this Page</div>
    <div className="counter">
      <span className='span__item'>0</span>
      <span className='span__item'>0</span>
      <span className='span__item'>0</span>
      <span className='span__item'>0</span>
      <span className='span__item'>0</span>
      <span className='span__item'>0</span>
    </div>
        </div>
    );
};

export default Counter;