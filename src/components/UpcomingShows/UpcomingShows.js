import React from 'react'

import concert_1 from '../../img/concert_1.jpg'
import concert_2 from '../../img/concert_2.jpg'

import './UpcomingShows.scss'

export default function UpcomingShows() {
  return (
    <div className="upcoming_shows pt-5">

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12">
              <h2 className="fancy_title">Predstojeći <span>Nastupi</span></h2>
            </div>

            <div className="row shows">
              <div className="col-md-4 mt-4">
                <div className="box">
                  <div className="date">
                    <ul>
                      <li>10</li>
                      <li>Maj</li>
                    </ul>
                  </div>
                  <img src={concert_1} alt="shows"/>
                  <div className="content">
                    <h4 className="title">Diskoteka Albatros</h4>
                    <p>Parking mesta su označena i obezbeđena, rezervacije i info na dole navedene tel brojeve.</p>
                    <div className="location">
                      <ul>
                        {/* <li>Tel: 064.129.7754</li> */}
                        <li>Lokacija: Šabac</li>
                      </ul>
                    </div>
                    {/* <a href="#" className="btn btn_blue">Rezervacije</a> */}
                  </div>
                  
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="date">
                    <ul>
                      <li>16</li>
                      <li>Maj</li>
                    </ul>
                  </div>
                  <img src={concert_2} alt="shows"/>
                  <div className="content">
                    <h4 className="title">Splav PORT</h4>
                    <p>Parking mesta su označena i obezbeđena, rezervacije i info na dole navedene tel brojeve.</p>
                    <div className="location">
                      <ul>
                        {/* <li>Tel: 064.821.0121</li> */}
                        <li>Lokacija: Novi Beograd</li>
                      </ul>
                    </div>
                    {/* <a href="#" className="btn btn_red">Rezervacije</a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="box">
                  <div className="date">
                    <ul>
                      <li>8</li>
                      <li>Jun</li>
                    </ul>
                  </div>
                  <img src={concert_2} alt="shows"/>
                  <div className="content">
                    <h4 className="title">Splav Kafana Uzbuna</h4>
                    <p>Pravi duh stare srpske kafane. Rezervacije i info na dole navedene tel brojeve.</p>
                    <div className="location">
                      <ul>
                        {/* <li>Tel: 064.321.5121</li> */}
                        <li>Lokacija: Novi Sad</li>
                      </ul>
                    </div>
                    {/* <a href="#" className="btn btn_blue">Rezervacije</a> */}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
