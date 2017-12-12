import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

export default () => (
  <div>
    <NavBar />
    <Grid>
    <Row>
      <Col xs={3} md={3}><SideNav /></Col>
      <Col xs={6} md={9}><NavBar /></Col>
    </Row>
  </Grid>
  </div>
)
