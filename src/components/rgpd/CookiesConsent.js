import React from 'react';
import CookieConsent, { Cookies, resetCookieConsentValue }from "react-cookie-consent";
import './cookiesConsent.css';
const CookiesRgpd = () => {
  console.log(resetCookieConsentValue());
    return (
        <div>
<CookieConsent enableDeclineButton flipButtons
  Flipped buttons 
  location="bottom"
  buttonText="accepter"
  cookieName="portfolio-fb.surge.sh"
  style={{ background: "#333",fontSize: "20px",  }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px", width: "120px" }}
  expires={150}
  declineButtonText = "I decline"
  ButtonComponent = "button"
>
Ce site utilise des cookies pour améliorer l'expérience utilisateur.{" "}
  <span style={{ fontSize: "20px" }}>Cliquez sur le bouton accepter pour continuer sur le site !</span>
</CookieConsent>
        </div>
    );
};

export default CookiesRgpd;