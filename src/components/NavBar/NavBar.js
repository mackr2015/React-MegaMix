import React from 'react'
import $ from 'jquery'
import { Link, animateScroll as scroll } from "react-scroll";

import { FaViber, FaInstagram, FaFacebook } from 'react-icons/fa'
// from https://react-icons.github.io/react-icons/icons?name=fa

import './NavBar.scss'

// import en from '../../img/england_fg.png';
// import fr from '../../img/france_fg.png';
// import de from '../../img/germany_fg.png';
// import ru from '../../img/russia_fg.png';
// import es from '../../img/spain_fg.png';


export default function NavBar(props) {
  const handleToggle = () =>{
    $('.navigation_menu').toggleClass('open');
    $('.toggleMenu button').toggleClass('open');

    if( $('.navigation_menu').hasClass('open') ){
      $('.navigation_menu').css('display','block');
      $('.navigation_menu').animate({
        right: 0,
        opacity: 1,
      }, 150);
    }else{
      $('.navigation_menu').animate({
        right: '-400px',
        opacity: 0
      },150, () => {
        $('.navigation_menu').css('display','none');
      });
    }
  }

  
  return (
    <>
    <div id="google_translate_website"></div>
   
    
    <div className="navigation_menu">
      <ul className="menu">
        <li><a href="/">Naslovna</a></li>
        <li>
          <a href="#about">O Nama</a>
          
        </li>
        <li><a href="/#contact">Kontakt</a></li>
      </ul>
      <ul className="icons">
        <li><a href="viber://contact?number=%2B381652214601"><FaViber /></a></li>
        <li><a href="https://www.facebook.com/megamixband/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/megamixband" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
        {/* <li><a href="#"><FaPhone /></a></li> */}
      </ul>
      
    </div>
    <div className="toggleMenu">
      
      <button onClick={handleToggle}>
        <span></span><span></span><span></span>
      </button>
    </div>
    </>
  )
}






