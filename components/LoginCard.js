import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Link from 'next/link'
import Router from 'next/router'
import Cookie from 'js-cookie'
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
    email: '',
    password: '',
    openDialog: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.status !== 'active') {
      this.handleOpenDialog()
    } else {
      Router.push('/dashboard')
      Cookie.set('username',nextProps.user[0].firstName)
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  clearInput() {
    this.setState({ email: '' })
    this.setState({ password: '' })
  }

  handleLogin() {
    let payload = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.dispatch(loginAction(payload))
    this.clearInput()
  }

  handleOpenDialog() {
    this.setState({ openDialog: true })
  }

  handleCloseDialog() {
    this.setState({ openDialog: false })
  }

  render () {
    const { classes } = this.props
    const user = this.props.user

    return (
      <div>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleCloseDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>{'เข้าสู่ระบบไม่สำเร็จ'}</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-desciption'>
              ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง<br />
              (ผู้ใช้อาจยังไม่ได้ยืนยันการสมัครสมาชิกทางอีเมล)
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <center><Paper className={classes.root} elevation={4}>
          <Typography type='headline' conponet='h2'>
            เข้าสู่ระบบ
          </Typography>
          <form noValidate autoComplete='off'>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              margin="normal"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
            />
            <TextField
              id="password"
              label="รหัสผ่าน"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePasswordChange.bind(this)}
            />
            <Typography type='body1' conponet='h2'>
              <Link href="/register">
                <a className={classes.link}>สมัครสมาชิก</a>
              </Link>
            </Typography>
            <Button raised color='primary' className={classes.button} onClick={this.handleLogin.bind(this)}>เข้าสู่ระบบ</Button>
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
  user: user.data
})

export default connect(mapStateToProps)(withStyles(styles)(LoginCard))
