import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useLocation } from "react-router-dom";

//import Logo from '../../assets/images/logo.png';



const Header = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    
    const[toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    let [icon, setIcon] = useState('icon')

 
 const toggleNav = () => {
 setToggleMenu(!toggleMenu)
 console.log(icon);
 if(icon === 'icon') {
    setIcon('icon open');
 } else {
    setIcon('icon');
 }
 }

 const handleChange = () =>{
        setToggleMenu(false);
        setIcon('icon');

 }
 useEffect(() => {
 
 const changeWidth = () => {
 setScreenWidth(window.innerWidth);
 }

 
 window.addEventListener('resize', changeWidth)

 return () => {
 window.removeEventListener('resize', changeWidth)
 }
 
 }, [])
 var derniere_position_de_scroll_connue = 0;
 var ticking = false;
 function faireQuelqueChose(position_scroll) {
     //console.log(position_scroll);
    if (position_scroll > 80) {
      document.getElementById("nav").style.background = "#f1f1f1";
    } else if (position_scroll < 80) {
        document.getElementById("nav").style.background = "";
    }
  }
 window.addEventListener('scroll', function(e) {
    derniere_position_de_scroll_connue = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        faireQuelqueChose(derniere_position_de_scroll_connue);
        ticking = false;
      });
    }
  
    ticking = true;
  });
 
  
    return (
        
        <>
            {/* <ul>
                <li><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
                <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
                <li><NavLink activeClassName="active" to='/service/inner'>Service</NavLink></li>
            </ul>  */}
            <div className='header'>
                {/* <img className='header-img' src={Logo} alt="" /> */}
            <nav id='nav'>
                
                {(toggleMenu || screenWidth > 650) && (
            <ul>
                
                
                {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to='/' onClick={handleChange} >Home</Link>
                </li>
                <li className={splitLocation[1] === "projets" ? "active" : ""}>
                    <Link to='/projets' onClick={handleChange} >Projets</Link>
                </li>
                <li className={splitLocation[1] === "contact" ? "active" : ""}>
                    <Link to="/contact" onClick={handleChange}>Contact</Link>
                </li>

                
            </ul>
            
                )}
            <div className={icon}onClick={toggleNav} >
                <span className='one'></span>
                <span className='two'></span>
                <span className='three'></span>
                <span className='four'></span>
            </div>
            </nav>
            </div>

        </>
    )
}

export default Header
