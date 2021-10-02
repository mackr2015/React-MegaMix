import React from 'react';
import Popup from './PopUp';
import $ from 'jquery';


import './AboutUs.scss';

import Pevacica from '../../img/Pevacica.png';
import Steva from '../../img/Steva.png';
import Toza from '../../img/Toza.png';
import Marko from '../../img/Marko.png';
import Buva from '../../img/Buva.png';
import Pevac from '../../img/Pevac.png';
import Mica from '../../img/Mica.png';


export default function AboutUs() {
 
  return (
    <div className="about_us" id="about">
      <div className="croud_bg">
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="fancy_title">MegaMixBand <span>Biografije</span></h2>
          </div>

          <div className="col-md-10 offset-md-1">

            <div className="row grid">

              <div className="col-md-6">
                <div className="row row_left">
                  <div className="col-md-7 offset-md-5 no-pad">
                    <div className="grid-item pevacica">
                      <img src={Pevacica} alt=""/>
                      <span className="title">Pevačica</span>
                      <span className="opis">Vokal</span>
                    </div>
                  </div>

                  <div className="col-md-4 offset-md-2 no-pad">
                    <div className="grid-item steva">
                      <img src={Steva} alt=""/>
                      <span className="title">Steva</span>
                      <span className="opis">Bass gitara</span>
                    </div>
                  </div>

                  <div className="col-md-6 no-pad">
                    <div className="grid-item toza">
                      <img src={Toza} alt=""/>
                      <span className="title">Toza</span>
                      <span className="opis">Klavijature</span>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="row row_right">
                  <div className="col-md-7 no-pad">
                    <div className="grid-item pevac">
                      <img src={Pevac} alt=""/>
                      <span className="title">Pevač</span>
                      <span className="opis">Vokal</span>
                    </div>
                  </div>
                  <div className="col-md-3 offset-md-1 no-pad">
                    <div className="grid-item marko">
                        <img src={Marko} alt=""/>
                        <span className="title">Marko</span>
                        <span className="opis">Gitarista</span>
                        
                        
                    </div>
                  </div>
                  <div className="col-md-4 offset-md-3">
                    <div className="grid-item mica">
                      <img src={Mica} alt=""/>
                      <span className="title">Mica</span>
                      <span className="opis">Klavijature</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="grid-item buva">
                      <img src={Buva} alt=""/>
                      <span className="title">Buva</span>
                      <span className="opis">Bubnjevi</span>
                    </div>
                  </div>
                 
                </div>
              </div>


              {/* <Popup trigger={true}>
                <p className="biografija" data-bio="marko">
                  Rođen u Šapcu, od malena pokazuje interesovanje za muziku koju mu prenose otac i ujaci, takođe muzičari.
                  Učio je da svira klavir, ali zbog ljubavi prema R'n'R muzici više ga je zainteresovala gitara. 
                  Proputovao gotovo pola Evrope sa KUD “Čivija“ iz Šapca gde stiče svoja prva ozbiljna iskustva u umetničkom izvodjenju.
                  Sa 19 godina pristupa MegaMix bendu sa kojim je snimio 2 albuma i učestvovao na mnogim festivalima i tv emisijama.
                </p>
              </Popup> */}

            </div>


            </div>
    
        </div>
           
      </div>

      <div className="line_divider"></div>
    </div>

     
  )
}
