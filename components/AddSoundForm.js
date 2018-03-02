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
import FormData from 'form-data'
import { connect } from 'react-redux'
import { registerAction } from '../actions/registerAction'
import { soundAction } from '../actions/selectAction'
import { getFeelingAction } from '../actions/getFeelingAction'
import { getTypeAction } from '../actions/getTypeAction'
import { addSoundAction } from '../actions/soundAction'


const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: 16,
    paddingBottom: 16,
    'justify-content': 'center',
    'align-items': 'center',
    width: 1000,
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
    sound: '',
    typeId: 1,
    sourceId: 1,
    feelingId: 1,
    maleFeeling: 1,
    maleMean: '',
    maleSD: '',
    femaleMean: '',
    femaleSD: '',
    teenageMean: '',
    teenageSD: '',
    oldmanMean: '',
    oldmaneSD: '',
    error: '',
    open: false,
  }

  componentWillMount() {
    this.props.dispatch(getTypeAction())
    this.props.dispatch(getFeelingAction({typeId: 1}))
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.add_sound) {
      if (nextProps.add_sound.status != 200) {
        this.setState({error: "มีไฟล์นี้ระบบแล้ว ไม่สามารถเพิ่มไฟล์ได้"})
        this.handleOpenDialog()
      } else if (nextProps.add_sound.status == 403) {
        console.log("Add sound success")
      }
    }
  }

  handleSoundUpload(e) {
    this.setState({sound: e.target.files[0]})
  }

  handleTypeChange(e) {
    this.setState({typeId: e.target.value})
    this.props.dispatch(getFeelingAction({typeId: e.target.value}))
  }

  handleFeelingChange(e) {
    this.setState({feelingId: e.target.value})
  }

  handleSourceChange(e) {
    this.setState({sourceId: e.target.value})
  }

  handleMaleMean(e) {
    this.setState({maleMean: e.target.value})
  }

  handleMaleSD(e) {
    this.setState({maleSD: e.target.value})
  }

  handleFemaleMean(e) {
    this.setState({femaleMean: e.target.value})
  }

  handleFemaleSD(e) {
    this.setState({femaleSD: e.target.value})
  }

  handleTeenageMean(e) {
    this.setState({teenageMean: e.target.value})
  }

  handleTeenageSD(e) {
    this.setState({teenageSD: e.target.value})
  }

  handleOldmanMean(e) {
    this.setState({oldmanMean: e.target.value})
  }

  handleOldmanSD(e) {
    this.setState({oldmanSD: e.target.value})
  }

  handleSubmitButton() {
    let payload = new FormData()
    payload.set('sound', this.state.sound, this.state.sound.name)
    payload.set('typeId', this.state.typeId)
    payload.set('sourceId', this.state.sourceId)
    payload.set('feelingId', this.state.feelingId)
    payload.set('maleMean', this.state.maleMean)
    payload.set('maleSD', this.state.maleSD)
    payload.set('femaleMean', this.state.femaleMean)
    payload.set('femaleSD', this.state.femaleSD)
    payload.set('teenageMean', this.state.teenageMean)
    payload.set('teenageSD', this.state.teenageSD)
    payload.set('oldmanMean', this.state.oldmanMean)
    payload.set('oldmanSD', this.state.oldmanSD)
    this.props.dispatch(addSoundAction(payload))
  }

  handleOpenDialog() {
    this.setState({open: true})
  }

  handleCloseDialog() {
    this.setState({open: false})
  }

  render () {
    const { classes } = this.props
    const type = this.props.type
    const feeling = this.props.feeling
    const add_sound = this.props.add_sound

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleCloseDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>เพิ่มเสียงไม่สำเร็จ</DialogTitle>
          <DialogContent>
            {this.state.error}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <div className='panel'>
          <center><h2>
            เพิ่มเสียง
          </h2></center>
          <form>
            เลือกเสียง : <input type="file" onChange={this.handleSoundUpload.bind(this)}/><br />
            ประเภทเสียง : <select onChange={this.handleTypeChange.bind(this)} >
            {(() => {
              if (type) {
                return (
                  type.rows.map((n, index) => {
                    return (
                      <option key={index} value={n.typeId}>{n.typeName}</option>
                    )
                  })
                )
              }
            })()}
            </select><br />
            ลักษณะความรู้สึก : <select onChange={this.handleFeelingChange.bind(this)}>
            {(() => {
              if (feeling) {
                return (
                  feeling.map((n, index) => {
                    return (
                      <option key={index} value={n.feelingId}>{n.feelingName}</option>
                    )
                  })
                )
              }
            })()}
            </select><br />
            แหล่งที่มา : <select onChange={this.handleSourceChange.bind(this)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select><br />
            <h4>กลุ่มเพศชาย</h4>
            ค่าเฉลี่ย : <input type='text' onChange={this.handleMaleMean.bind(this)} />&nbsp;&nbsp;&nbsp;
            ส่วนเบี่ยงเบนมาตรฐาน : <input type='text' onChange={this.handleMaleSD.bind(this)} />
            <br />
            <h4>กลุ่มเพศหญิง</h4>
            ค่าเฉลี่ย : <input type='text' onChange={this.handleFemaleMean.bind(this)} />&nbsp;&nbsp;&nbsp;
            ส่วนเบี่ยงเบนมาตรฐาน : <input type='text' onChange={this.handleFemaleSD.bind(this)} />
            <br />
            <h4>กลุ่มอายุ 18 - 35 ปี</h4>
            ค่าเฉลี่ย : <input type='text' onChange={this.handleTeenageMean.bind(this)} />&nbsp;&nbsp;&nbsp;
            ส่วนเบี่ยงเบนมาตรฐาน : <input type='text' onChange={this.handleTeenageSD.bind(this)} />
            <br />
            <h4>กลุ่มอายุ 36 - 60 ปี</h4>
            ค่าเฉลี่ย : <input type='text' onChange={this.handleOldmanMean.bind(this)} />&nbsp;&nbsp;&nbsp;
            ส่วนเบี่ยงเบนมาตรฐาน : <input type='text' onChange={this.handleOldmanSD.bind(this)} />
            <br /><br />
            <center><button onClick={this.handleSubmitButton.bind(this)}>เพิ่มเสียง</button><button>ยกเลิก</button></center>
          </form>
        </div>
        <style jsx>{`
          .panel {
            display: inline-block;
            background: #ffffff;
            min-height: 100px;
            height: 600px;
            box-shadow:0px 0px 5px 5px #C9C9C9;
            -webkit-box-shadow:2px 2px 5px 5x #C9C9C9;
            -moz-box-shadow:2px 2px 5px 5px #C9C9C9;
            margin: 10px;
            padding: 10px;
          }
        `}
        </style>
      </div>
    )
  }
}

AddSoundForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({type, feeling, add_sound}) => ({
  type: type.data,
  feeling: feeling.data,
  add_sound: add_sound
})

export default connect(mapStateToProps)(withStyles(styles)(AddSoundForm))
