import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  flex: {
    flex: 1
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
})

class Navbar extends React.Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => (
    this.setState({ open: true })
  )

  handleDrawerClose = () => (
    this.setState({ open: false })
  )

  render () {
    const { classes, theme } = this.props
    const { open } = this.state
    const drawer = (
      <Drawer
        type='persistent'
        classes={{
          paper: classes.drawerPaper
        }}
        open={open}
      >
        <div className={classes.drawerInner}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </div>
      </Drawer>
    )

    return (
      <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='contrast'
              aria-label="open menu"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography type='title' color='inherit' className={classes.flex} noWrap>Thai-sound</Typography>
            <Button color="contrast">เข้าสู่ระบบ</Button>
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
      </div>
    )
  }
}

Navbar.PropTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
