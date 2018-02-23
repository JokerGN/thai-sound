import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginCard from '../components/LoginCard'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Cookie from 'js-cookie'
import Router from 'next/router'
import initializeStore from '../store/initializeStore'

const styles = {
  root: {
    paddingTop: 0,
  },
}

class Login extends Component {
  componentDidMount() {
    if (Cookie.get('username')) {
      Router.push('/dashboard')
    }
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <LoginCard />
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRedux(initializeStore)(withReduxSaga((withRoot(withStyles(styles)(Login)))))
