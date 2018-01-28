import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Dashboard from 'material-ui-icons/Dashboard'
import Assignment from 'material-ui-icons/Assignment'
import AccouintBox from 'material-ui-icons/AccountBox'
import { connect } from 'react-redux'
import { indexAction, soundAction, userAction } from '../actions/selectAction'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 300,
    background: theme.palette.background.paper,
  }
})

class Menu extends React.Component {

  handleIndexComponent() {
    this.props.dispatch(indexAction())
  }

  handleSoundComponent() {
    this.props.dispatch(soundAction())
  }

  handleUserComponent() {
    this.props.dispatch(userAction())
  }

  render () {
    const { classes } = this.props
    return (
      <List className={classes.root}>
        <ListItem button onClick={this.handleIndexComponent.bind(this)}>
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText inset primary='หน้าหลัก' />
        </ListItem>
        <ListItem button onClick={this.handleSoundComponent.bind(this)}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText inset primary='จัดการเสียง' />
        </ListItem>
        <ListItem button onClick={this.handleUserComponent.bind(this)}>
          <ListItemIcon>
            <AccouintBox />
          </ListItemIcon>
          <ListItemText inset primary='จัดการผู้ใช้' />
        </ListItem>
      </List>
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({component}) => ({
  component: component
})

export default connect(mapStateToProps)(withStyles(styles)(Menu))
