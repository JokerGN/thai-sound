import React from 'react'
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
import Cookie from 'js-cookie'
import FormData from 'form-data'
import { connect } from 'react-redux'
import { registerAction } from '../actions/registerAction'
import { soundAction } from '../actions/selectAction'
import { getFeelingAction } from '../actions/getFeelingAction'
import { getTypeAction } from '../actions/getTypeAction'
import { addSoundAction, clearAddSoundData } from '../actions/soundAction'
import { selectSoundAction } from '../actions/selectAction'

class AddSoundForm extends React.Component {

  state = {
    sound: '',
    typeId: 1,
    sourceId: 1,
    feelingId: 1,
    mean: '',
    sd: '',
    maleMean: '',
    femaleMean: '',
    teenageMean: '',
    oldmanMean: '',
    error: '',
    openError: false,
    openSuccess: false
  }

  componentWillMount() {
    this.props.dispatch(getTypeAction())
    this.props.dispatch(getFeelingAction({typeId: 1}))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.add_sound) {
      if (nextProps.add_sound.data.status == 200) {
        this.handleOpenSuccessDialog()
      } else if (nextProps.add_sound.data.status == 403) {
        this.setState({error: "มีไฟล์นี้ระบบแล้ว ไม่สามารถเพิ่มไฟล์ได้"})
        this.handleOpenErrorDialog()
      } else {
        this.setState({error: "เกิดข้อผิดพลาดในระบบ กรุณาติดต่อผู้ดูแล"})
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

  handleMeanChange(e) {
    this.setState({mean: e.target.value})
  }

  handleSDChange(e) {
    this.setState({sd: e.target.value})
  }

  handleMaleMean(e) {
    this.setState({maleMean: e.target.value})
  }

  handleFemaleMean(e) {
    this.setState({femaleMean: e.target.value})
  }

  handleTeenageMean(e) {
    this.setState({teenageMean: e.target.value})
  }

  handleOldmanMean(e) {
    this.setState({oldmanMean: e.target.value})
  }

  handleSubmitButton() {
    if (this.state.sound == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.mean == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.sd == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.maleMean == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.femaleMean == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.teenageMean == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else if (this.state.oldmanMean == '') {
      this.setState({error: 'กรุณากรอกข้อมูลให้ครบถ้วน'})
      this.handleOpenErrorDialog()
    } else {
      let payload = new FormData()
      payload.set('sound', this.state.sound, this.state.sound.name)
      payload.set('typeId', this.state.typeId)
      payload.set('sourceId', this.state.sourceId)
      payload.set('feelingId', this.state.feelingId)
      payload.set('mean', this.state.mean)
      payload.set('sd', this.state.sd)
      payload.set('maleMean', this.state.maleMean)
      payload.set('femaleMean', this.state.femaleMean)
      payload.set('teenageMean', this.state.teenageMean)
      payload.set('oldmanMean', this.state.oldmanMean)
      this.props.dispatch(addSoundAction(payload))
    }
  }

  handleOpenErrorDialog() {
    this.setState({openError: true})
  }

  handleCloseErrorDialog() {
    this.setState({openError: false})
  }

  handleOpenSuccessDialog() {
    this.setState({openSuccess: true})
  }

  handleCloseSuccessDialog() {
    this.setState({openSuccess: false})
    this.props.dispatch(clearAddSoundData())
    this.props.dispatch(selectSoundAction())
  }

  handleCancleButton() {
    this.props.dispatch(selectSoundAction())
  }

  render () {
    const { classes } = this.props
    const type = this.props.type
    const feeling = this.props.feeling
    const add_sound = this.props.add_sound

    return (
      <div>
        <Dialog
          open={this.state.openError}
          onClose={this.handleCloseErrorDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>เพิ่มเสียงไม่สำเร็จ</DialogTitle>
          <DialogContent>
            {this.state.error}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseErrorDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={this.state.openSuccess}
          onClose={this.handleCloseSuccessDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>เพิ่มเสียงสำเร็จ</DialogTitle>
          <DialogContent>
            เพิ่มเสียงสำเร็จ กลับสู่หน้าหลัก
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSuccessDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <div className='panel'>
          <center><h2>
            เพิ่มเสียง
          </h2></center>
          <table><form>
            <tr>
              <td>เลือกเสียง : </td>
              <td><input type="file" onChange={this.handleSoundUpload.bind(this)}/></td>
            </tr>
            <tr>
              <td>ประเภทเสียง : </td>
              <td><select onChange={this.handleTypeChange.bind(this)} >
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
                </select>
              </td>
            </tr>
            <tr>
              <td>ลักษณะความรู้สึก : </td>
              <td><select onChange={this.handleFeelingChange.bind(this)}>
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
                </select>
              </td>
            </tr>
            <tr>
              <td>แหล่งที่มา : </td>
              <td>
              <select onChange={this.handleSourceChange.bind(this)}>
                <option value="1">1</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' onChange={this.handleMeanChange.bind(this)} /></td>
            </tr>
            <tr>
              <td>ส่วนเบียงเบนมาตรฐาน : </td>
              <td><input type='text' onChange={this.handleSDChange.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มเพศชาย</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' onChange={this.handleMaleMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มเพศหญิง</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' onChange={this.handleFemaleMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มอายุ 18 - 35 ปี</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' onChange={this.handleTeenageMean.bind(this)} /></td>
            </tr>
           <tr>
              <td colSpan={2}><h4>กลุ่มอายุ 36 - 60 ปี</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' onChange={this.handleOldmanMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><center><br />
                <button onClick={this.handleSubmitButton.bind(this)}>เพิ่มเสียง</button>
                <button onClick={this.handleCancleButton.bind(this)}>ยกเลิก</button>
                </center>
              </td>
            </tr>
          </form></table>
        </div>
        <style jsx>{`
          .panel {
            display: inline-block;
            background: #ffffff;
            min-height: 100px;
            height: 700px;
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

const mapStateToProps = ({type, feeling, add_sound}) => ({
  type: type.data,
  feeling: feeling.data,
  add_sound: add_sound
})

export default connect(mapStateToProps)(AddSoundForm)
