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
import { soundAction } from '../actions/selectAction'


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

class AddSoundForm extends React.Component {

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

  handleSoundUpload(e) {
    console.log(e.target.value)
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
    Router.push('/')
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
        <Paper className={classes.root} elevation={4}>
          <center><Typography type='headline' conponet='h2'>
            เพิ่มเสียง
          </Typography></center>
          <form>
            เลือกเสียง : <input type="file" onChange={this.handleSoundUpload.bind(this)}/><br />
            ประเภทเสียง : <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select><br />
            ลักษณะความรู้สึก : <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select><br />
            แหล่งที่มา : <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select><br />
            ค่าเฉลี่ย : <input type='text' /><br />
            ส่วนเบี่ยงเบนมาตรฐาน : <input type='text' /><br />
          </form>
        </Paper>
      </div>
    )
  }
}

AddSoundForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({register}) => ({
  register: register
})

export default connect(mapStateToProps)(withStyles(styles)(AddSoundForm))
