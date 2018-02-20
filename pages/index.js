import React, { Component } from 'react'
import Router from 'next/router'
import withRoot from '../components/withRoot'
import { withStyles } from 'material-ui/styles'
import SoundImage from '../components/SoundImage'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import IndexBar from '../components/IndexBar'

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



export default withRoot(Index)
