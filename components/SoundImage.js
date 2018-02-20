import React from 'react'
import {Col, Row} from 'react-styled-flexboxgrid'
import ReactHowler from 'react-howler'

class SoundImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      volume: 0.5,
      loop: true
    }
  }

  render () {
    return (
      <Row>
        <ReactHowler
          src="http://localhost:3001/sound/uploads/waterfall.mp3"
          playing={this.state.playing}
          loop={this.state.loop}
          volume={this.state.volume}
        />
        <Col md={12}>
          <div className="bg">
            <p>THAI-SOUND</p>
          </div>
        </Col>
        <style jsx>{`
          p {
            position: absolute;
            width: 300px;
            height: 150px;
            top: 50%;
            left: 50%;
            margin-left: -150px; /* margin is -0.5 * dimension */
            margin-top: -75px;
            font-size: 50px;
            color: white;
            text-shadow: 2px 2px black;
          }
          .bg {
            background: url("/static/waterfall.gif");
            width: 100%;
            height: 100%;
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0.7;
            z-index: -1;
          }
          button:hover {
            opacity: 0.5;
          }
          `}
        </style>
      </Row>
    )
  }
}


export default SoundImage
