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
import Menu from './Menu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
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
  },
  drawerPaper: {
    marginTop: 65,
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
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
})

class Navbar extends React.Component {

  state = {
    open: true
  }

  handleToggleDrawer = () => (
    this.setState({ open: !this.state.open })
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
            <Menu />
          </div>
        </div>
      </Drawer>
    )

    return (
      <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='contrast'
              aria-label="open menu"
              onClick={this.handleToggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography type='title' color='inherit' className={classes.flex} noWrap>Thai-sound</Typography>
            <Button color="contrast">เข้าสู่ระบบ</Button>
          </Toolbar>
        </AppBar>
        {drawer}
        <main
          className={classNames(classes.content, classes['content-left'], {
            [classes.contentShift]: open,
            [classes['contentShift-left']]: open
          })}
        >
          <Typography>Thai-sound content</Typography>
        </main>
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
