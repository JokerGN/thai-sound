import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginCard from '../components/LoginCard'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'
import withRedux from 'next-redux-wrapper'
import initializeStore from '../store/initializeStore'

const styles = {
  root: {
    paddingTop: 0,
  },
}

class Index extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <LoginCard />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRedux(initializeStore)(withRoot(withStyles(styles)(Index)))
