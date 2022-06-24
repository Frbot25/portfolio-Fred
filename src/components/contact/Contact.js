import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import{ init } from '@emailjs/browser';



init("AJh-FhXlcSrnJvbRc");
const Contact = () => {
    const [email, setEmail] = useState('');
    const [nameInput, setName] = useState('');
    const [message, setMessage] = useState('');
   function  inputChangedName  (event)  {
        setName(event.target.value);
        // May be call for search result
    }
    function  inputChangedEmail  (event)  {
        setEmail(event.target.value);
        // May be call for search result
    }
    function  textareaChangedText (event)  {
        setMessage(event.target.value);
        // May be call for search result
    }
    const form = useRef();
    const SERVICEID = 'service_pl6le2r';
    const USERID= 'AJh-FhXlcSrnJvbRc';
    const template = 'template_y1w1bke';
    const sendEmail = (e) => {
        e.preventDefault();
        document.querySelector('.config').values='';
        emailjs.sendForm(SERVICEID, template, e.target, USERID)
        .then((result) => {
            console.log(result.text);
            setEmail('');
            setMessage('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <>
        
        <div className='app-container'>
            <h1>Contact</h1>
            <div className="container-form">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                        <label className='contact-label'>Votre Prénom</label>
                        <input className='contact-input config' type="text" onChange={(event)=>inputChangedName(event)} name="name" value={nameInput} required/>
                        <label className='contact-label'>Votre Email</label>
                         <input className='contact-input config' type="email" onChange={(event)=>inputChangedEmail(event)} name="email" value={email} required></input>
                        <textarea className='contact-textarea config' maxlength="300" onChange={(event)=>textareaChangedText(event)}  value={message} name="message" id="" cols="30" rows="10" placeholder='écrivez votre texte ici, maxi 300 caractères !' required></textarea>
                        </div>
                        <input className='contact-bouton' type="submit" value="Envoyé" />

                    </form>
                </div>
                {/* <Ecriture /> */}
            </div>
            
            
            
        </div>

        </>
    );
};

export default Contact;