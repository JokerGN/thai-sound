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
import { connect } from 'react-redux'
import { registerAction } from '../actions/registerAction'
import { selectMainAction } from '../actions/selectAction'


const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: 16,
    paddingBottom: 16,
    'justify-content': 'center',
    'align-items': 'center',
    width: 400,
    marginTop: 10,
    flexWrap: 'wrap'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    'text-decoration': 'none'
  }
})

class RegisterForm extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    citizenId: '',
    email: '',
    password: '',
    address: '',
    error: '',
    openDialog: false,
    openSuccessDialog: false
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.register.data.status != 200) {
      if (nextProps.register.data.message.created == false) {
        this.setState({error: 'มีผู้ใช้ email ในการสมัครสมาชิกแล้ว'})
      } else {
        let errorList = nextProps.register.data.message.error.map((error) => <li>{error}</li>)
        this.setState({error: <ul>
          {errorList}
          </ul>})
      }
      this.handleOpenDialog()
    } else {
      this.handleOpenSuccessDialog()
    }
  }

  handleFirstNameChange (e) {
    this.setState({firstName: e.target.value})
  }

  handleLastNameChange (e) {
    this.setState({lastName: e.target.value})
  }

  handleLastNameChange (e) {
    this.setState({lastName: e.target.value})
  }

  handleCitizenIdChange (e) {
    this.setState({citizenId: e.target.value})
  }

  handleEmailChange (e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange (e) {
    this.setState({password: e.target.value})
  }

  handleAddressChange (e) {
    this.setState({address: e.target.value})
  }

  handleOpenDialog() {
    this.setState({ openDialog: true })
  }

  handleCloseDialog() {
    this.setState({ openDialog: false })
  }

  handleOpenSuccessDialog() {
    this.setState({ openSuccessDialog: true })
  }

  handleCloseSuccessDialog() {
    this.setState({ openSuccessDialog: false })
    this.props.dispatch(selectMainAction())
  }

  handleRegister() {
    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      citizenId: this.state.citizenId,
      address: this.state.address
    }
    this.props.dispatch(registerAction(payload))
  }

  render () {
    const { classes } = this.props
    const register = this.props.register

    return (
      <div>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleCloseDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>สมัครสมาชิกไม่สำเร็จ</DialogTitle>
          <DialogContent>
            {this.state.error}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openSuccessDialog}
          onClose={this.handleCloseSuccessDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>สมัครสมาชิกสำเร็จ</DialogTitle>
          <DialogContent>
            สมัครสมาชิกสำเร็จ กรุณายืนยันการสมัครสมาชิกทาง E-mail
            (หากไม่พบกรุณาตรวจสอบที่อีเมลขยะ)
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSuccessDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <center><Paper className={classes.root} elevation={4}>
          <Typography type='headline' conponet='h2'>
            สมัครสมาชิก
          </Typography>
          <form noValidate autoComplete='off'>
            <TextField
              id="firstName"
              label="ชื่อ"
              className={classes.textField}
              margin='normal'
              value={this.state.firstName}
              onChange={this.handleFirstNameChange.bind(this)}
            />
            <TextField
              id="lastName"
              label="นามสกุล"
              className={classes.textField}
              margin='normal'
              value={this.state.lastName}
              onChange={this.handleLastNameChange.bind(this)}
            />
            <TextField
              id="citizenId"
              label="เลขประจำตัวประชาชน"
              className={classes.textField}
              margin='normal'
              value={this.state.citizenId}
              onChange={this.handleCitizenIdChange.bind(this)}
            />
            <TextField
              id="email"
              label="Email (ใช้สำหรับการ Login เข้าสู่ระบบ)"
              className={classes.textField}
              margin='normal'
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
            <TextField
              id="address"
              label="ที่อยู่ที่สามารถติดต่อได้"
              multiline
              rows='5'
              className={classes.textField}
              margin='normal'
              value={this.state.address}
              onChange={this.handleAddressChange.bind(this)}
            />
            <Button raised color='primary' className={classes.button} onClick={this.handleRegister.bind(this)}>SUBMIT</Button>
          </form>
        </Paper></center>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({register}) => ({
  register: register
})

export default connect(mapStateToProps)(withStyles(styles)(RegisterForm))
