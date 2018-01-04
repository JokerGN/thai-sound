import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RegisterForm from '../components/RegisterForm'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import initializeStore from '../store/initializeStore'

const styles = {
  root: {
    paddingTop: 0,
  },
}

class Register extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <RegisterForm />
      </div>
    )
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRedux(initializeStore)(withReduxSaga((withRoot(withStyles(styles)(Register)))))
