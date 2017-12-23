import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Link from 'next/link'
import { loginAction } from '../actions/loginAction'
import { connect } from 'react-redux'


const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: 16,
    paddingBottom: 16,
    'justify-content': 'center',
    'align-items': 'center',
    width: 300,
    marginTop: 200,
    flexWrap: 'wrap'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    'text-decoration': 'none'
  }
})

class LoginCard extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleLogin() {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.dispatch(loginAction(payload))
  }

  render () {
    const { classes } = this.props
    const user = this.props.user
    console.log(user)

    return (
      <div>
        <center><Paper className={classes.root} elevation={4}>
          <Typography type='headline' conponet='h2'>
            Login
          </Typography>
          <form noValidate autoComplete='off'>
            <TextField
              id="username"
              label="Username"
              className={classes.textField}
              margin="normal"
              onChange={this.handleUsernameChange.bind(this)}
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={this.handlePasswordChange.bind(this)}
            />
            <Typography type='body1' conponet='h2'>
              <Link href="/register">
                <a className={classes.link}>Sign up</a>
              </Link>
            </Typography>
            <Button raised color='primary' className={classes.button} onClick={this.handleLogin.bind(this)}>Login</Button>
          </form>
        </Paper></center>
      </div>
    )
  }
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({user}) => ({
  user: user
})

export default connect(mapStateToProps)(withStyles(styles)(LoginCard))
