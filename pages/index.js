import React, { Component } from 'react'
import Router from 'next/router'
import withRoot from '../components/withRoot'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { withStyles } from 'material-ui/styles'
import SoundImage from '../components/SoundImage'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import IndexBar from '../components/IndexBar'
import initializeStore from '../store/initializeStore'

class Index extends Component {
  render() {
    return (
      <Grid fluid className="root">
      <Row>
        <Col md={12}>
          <IndexBar />
        </Col>
        <SoundImage />
      </Row>
        <style>{`
          .root {
            margin: 0;
            padding: 0;
          }
        `}
        </style>
      </Grid>
    )
  }
}



export default withRedux(initializeStore)(withReduxSaga(withRoot(Index)))
