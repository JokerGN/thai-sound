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
import Router from 'next/router'
import Cookie from 'js-cookie'
import { logoutAction } from '../actions/loginAction'
import { connect } from 'react-redux'
import Menu from './Menu'
import UserTable from './UserTable'
import Grid from 'material-ui/Grid'

const drawerWidth = 150

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
    padding: theme.spacing.unit * 2,
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
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0
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

  handleLogout() {
    this.props.dispatch(logoutAction())
    Cookie.remove('username')
    Router.push('/')
  }

  render () {
    const { classes} = this.props
    const { open } = this.state
    const username = Cookie.get('username')
    const component = this.props.component
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
            <Typography color='inherit'>Username : {username}</Typography>
            &nbsp;&nbsp;
            <Button color="contrast" onClick={this.handleLogout.bind(this)}>Logout</Button>
          </Toolbar>
        </AppBar>
        {drawer}
        <main
          className={classNames(classes.content, classes['content-left'], {
            [classes.contentShift]: open,
            [classes['contentShift-left']]: open
          })}
        >
          {(() => {
            if (component === 'index') {
              return <p>This is index content</p>
            } else if (component === 'sound') {
              return <p>This is sound content</p>
            } else {
              return (
                <Grid item md={12} >
                  <UserTable />
                </Grid>
              )
            }
          })()}
        </main>
      </div>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = ({component}) => ({
  component: component
})

export default connect(mapStateToProps)(withStyles(styles)(Navbar))
