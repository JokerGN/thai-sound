import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageMenu from '../components/PageMenu'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import initializeStore from '../store/initializeStore'
import Cookie from 'js-cookie'
import Router from 'next/router'

const styles = {
  root: {
    paddingTop: 0,
  },
}

class Dashboard extends Component {

  componentDidMount() {
    if (!(Cookie.get('username'))) {
      Router.push('/login')
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <PageMenu />
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRedux(initializeStore)(withReduxSaga((withRoot(withStyles(styles)(Dashboard)))))
