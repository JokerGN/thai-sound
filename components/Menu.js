import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Dashboard from 'material-ui-icons/Dashboard'
import Assignment from 'material-ui-icons/Assignment'
import AccouintBox from 'material-ui-icons/AccountBox'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  }
})

const Menu = (props) => {
  const { classes } = props

  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText inset primary='หน้าหลัก' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText inset primary='จัดการเสียง' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccouintBox />
        </ListItemIcon>
        <ListItemText inset primary='จัดการผู้ใช้' />
      </ListItem>
    </List>
  )
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Menu)
