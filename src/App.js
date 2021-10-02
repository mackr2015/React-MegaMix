import React from 'react';
// import Masonry from 'masonry-layout';
// import { Link, animateScroll as scroll } from "react-scroll";

import Header from './components/Header/Header';

import VideoSection from './components/VideoSection/VideoSection';
import UpcomingShows from './components/UpcomingShows/UpcomingShows';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// import Bootstrap from 'react-bootstrap';
import './bootstrap.min.css';
// Default overwrite 
import './app.scss';
// Roboto Font


export default function App() {
 
  return (
    <>
      {
        // window.onload = () => {
        //   const grid = document.querySelector('.grid');
        //   const masonry = new Masonry( grid, {
        //     itemSelector: '.grid-item',
        //     originTop: false,
        //     orginLeft: false
        //   })  
        // }
      }
      <Header />

      {/* <Router>
        <Switch> 
          <Route path="/" exact component={Home}/>
          <Route path="/#aboutus" />
          <Route path="/#contact" />
        </Switch>
      </Router> */}

      <VideoSection />
      <UpcomingShows />
      <AboutUs />

      <Footer />

    </>
  )
}

