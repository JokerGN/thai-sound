import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import { withStyles } from 'material-ui/styles'
import withRoot from '../components/withRoot'

const styles = {
  root: {
    paddingTop: 0,
  },
}

class Dashboard extends Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <Navbar />
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Dashboard))
