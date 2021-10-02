import React from 'react'
import NavBar from '../NavBar/NavBar'

import LogoWhite from '../../img/logo-white.svg'
import BrandingLogo from '../../img/Branding_logo.png'
import NoteAsset from '../../img/note_asset.png';
import LetterAssetRight from '../../img/letters_asset_right.png';

import './Header.scss'

export default function Header() {
  const currentPath = window.location.pathname;
  let page;
  page = (currentPath === '/')? 'home': null;
  return (
    <header>
      
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="logo">
                <a href="/">
                { /* Hide on Home page */}
                <img src={LogoWhite} className={page} alt="Logo White"/>
                </a>
              </div>
              <ul className="contact_info">
                <li><a href="tel:+381652214601">+381 65 2214 601</a></li>
                <li><a href="mailto:megamixband@gmail.com">megamixband@gmail.com</a></li>
              </ul>
            </div>
          
            <div className="col-7">
              <NavBar />
            </div>
            
          </div>
        </div>
        
      </nav>

      <div className="branding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <img src={BrandingLogo} className={page} alt="MegaMix Band Branding Logo" />
              <h1 className="title">MegaMixBand Preko 25 godina sa vama</h1>
              <p className="subtitle">
                MegaMixBand je nastao spajanjem najboljih muzičara iz okoline Šapca. 
                Svojim nastupima nikoga ne ostavljaju ravnodušnim. 
                Izadali su 5 albuma, 10 hit singlova na domaćim top listama, učestvovali na TV show programima, 
                nastupali u inostranstvu kao i na mnogobrojnim festivalima.
              </p>
              <div>
                <a href="tel:+381652214601" className="btn btn_default">Kontakt</a>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="note_asset">
        <img src={NoteAsset} alt="note asset element"/>
      </div>
      <div className="letter_asset_right">
        <img src={LetterAssetRight} alt="Letter Asset element"/>
      </div>
      
    </header>
  )
}
