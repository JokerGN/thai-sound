import React from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf'

class SoundPlayer extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      playing: false,
      duration: 0.00,
      seek: 0.00
    }
    this.renderSeekPos = this.renderSeekPos.bind(this)
  }

  componentWillUnmount () {
    this.clearRAF()
  }

  handleOnLoad() {
    this.setState({duration: this.player.duration()})
  }

  handlePlayButton() {
    this.setState({playing: !this.state.playing})
    this.renderSeekPos()
  }

  handleStopButton() {
    this.player.stop()
    this.renderSeekPos()
  }

  renderSeekPos () {
    this.setState({
      seek: this.player.seek()
    })
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
    this.renderSeekPos()
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  clearRAF () {
    raf.cancel(this._raf)
  }

  render() {
    return (
      <div>
        <ReactHowler
          src={this.props.soundUrl}
          playing={this.state.playing}
          ref={(ref) => (this.player =ref)}
          onLoad={this.handleOnLoad.bind(this)}
          onEnd={this.handleOnEnd.bind(this)}
          onPlay={this.handleOnPlay.bind(this)}
        />
        <p>{(this.state.seek !== undefined) ? this.state.seek.toFixed(2) : '0.00'}/{this.state.duration.toFixed(2)}</p>
        <button onClick={this.handlePlayButton.bind(this)}>{(!this.state.playing) ? 'play': 'pause'}</button>
        <button onClick={this.handleStopButton.bind(this)}>stop</button>
        <style jsx>{`
          button {
            font-family: Kanit;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
          }
        `}</style>
      </div>
    )
  }
}

export default SoundPlayer
