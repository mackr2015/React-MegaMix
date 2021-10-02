import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import './VideoSection.scss';

// reference iframe embed code 
// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

export default function VideoSection() {
  return (
    <div className="video_section pb-5 pt-5">
      <Container>
        <Row>
          <Col className="justify-content-center col-md-10 offset-md-1">
            <h2 className="fancy_title">Pogledajte naše <span>Video Snimke</span></h2>
            <div className="youtube_video">
              <iframe 
              width="100"
              height="100"
              src="https://www.youtube.com/embed/1W0bAPulDas" 
              title="MegaMix Band Youtube Cover"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
