import React from 'react';


import { FaViber, FaInstagram, FaFacebook } from 'react-icons/fa'

import './Footer.scss';

import FooterLogo from '../../img/megamixband_logo.png';
import BandGroupPhoto from '../../img/footer_band_photo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer_section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 center">
            <h2 className="fancy_title">Bukirajte MegaMixBand <span>Kontakt</span></h2>
            <p>Profesionalni, kvalitetni, iskusni muzičari sa preko 25 godina na Balkanskoj muzičkoj sceni.
              Ovdje mi napišite kratko o bendu, br albuma, godine postojanja,  itd....
            </p>
            <a href="tel:+381652214601" className="btn btn_default">buking & kontakt</a>
          </div>

          <div className="col-md-12 center">
            <img src={BandGroupPhoto} alt="MegaMixBand grupna slika"/>
          </div>

          <div className="col-md-8 offset-md-2 center footer_logo">
            <img src={FooterLogo} alt="MegaMixBand logo"/>
          </div>

          <div className="col-md-8 offset-md-2 center">
            <ul className="icons">
              <p className="blue">Zapratite MegaMixBand</p>
              <li><a href="viber://contact?number=%2B381652214601"><FaViber /></a></li>
              <li><a href="https://www.facebook.com/megamixband/" target="_blank" rel="noreferrer"><FaFacebook /></a></li>
              <li><a href="https://www.instagram.com/megamixband" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
              {/* <li><a href="#"><FaPhone /></a></li> */}
            </ul>

            <div className="copyright">
              <ul>
                <li>Website designed &#38; built by</li>
                <li><a href="https://maivdigital.com/" target="_blank" rel="noreferrer">MaivDigital</a></li>
                <li>Copyright&nbsp;&#169;&nbsp;{currentYear}&nbsp;Megamix Band</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
