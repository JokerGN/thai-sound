import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import Menu from './Menu'
import NavBar from './NavBar'
import UserTable from './UserTable'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

class PageMenu extends React.Component {

  state = {
    open: true
  }

  handleToggleDrawer = () => (
    this.setState({ open: !this.state.open })
  )

  handleLogout() {
    this.props.dispatch(logoutAction())
    Cookie.remove('username')
    Router.push('/')
  }

  render () {
    const { classes} = this.props
    const { open } = this.state
    const component = this.props.component

    return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
        <NavBar />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2}>
        <Menu />
        </Col>
        <Col xs={8} md={10}>
        {(() => {
          if (component === 'index') {
            return (
              <div>
                <p>This is index content</p>
              </div>
            )
          } else if (component === 'sound') {
            return (
              <div>
                <p>This is sound content</p>
              </div>
            )
          } else {
            return (
              <div>
                <UserTable />
              </div>
            )
          }
        })()}
        </Col>
      </Row>
    </Grid>
    )
  }
}

const mapStateToProps = ({component}) => ({
  component: component
})

export default connect(mapStateToProps)(PageMenu)
