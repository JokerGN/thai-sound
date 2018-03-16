import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import FormData from 'form-data'
import SoundPlayer from './SoundPlayer'
import { connect } from 'react-redux'
import { getFeelingAction } from '../actions/getFeelingAction'
import { getTypeAction } from '../actions/getTypeAction'
import { selectSoundAction } from '../actions/selectAction'
import { getSoundByIdAction } from '../actions/getSoundAction'
import { editSoundAction, clearEditSoundData } from '../actions/soundAction'
const serverUrl = 'http://thai-sound-api.chaluline.com'
const devServerUrl = 'http://localhost:3001'

class EditSoundForm extends React.Component {

  state = {
    soundUrl: '',
    soundName: '',
    soundId: '',
    typeId: 0,
    sourceId: 0,
    feelingId: 0,
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
    let payload = {
      soundId: this.props.soundId
    }
    this.props.dispatch(getSoundByIdAction(payload))
    this.props.dispatch(getTypeAction())
    this.props.dispatch(getFeelingAction({typeId: this.props.typeId}))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit_sound) {
      this.setState({ soundUrl: serverUrl+'/sound/'+nextProps.edit_sound[0].soundUrl })
      this.setState({ soundName: nextProps.edit_sound[0].soundName})
      this.setState({ soundId: nextProps.edit_sound[0].soundId })
      if (!this.state.typeId) {
        this.setState({ typeId: nextProps.edit_sound[0].typeId })
      }
      this.setState({ sourceId: nextProps.edit_sound[0].sourceId })
      this.setState({ feelingId: nextProps.edit_sound[0].feelingId })
      this.setState({ mean: nextProps.edit_sound[0].mean })
      this.setState({ sd: nextProps.edit_sound[0].sd })
      this.setState({ maleMean: nextProps.edit_sound[0].maleMean })
      this.setState({ femaleMean: nextProps.edit_sound[0].femaleMean })
      this.setState({ teenageMean: nextProps.edit_sound[0].teenageMean })
      this.setState({ oldmanMean: nextProps.edit_sound[0].oldmanMean })
    }
    if (nextProps.update_sound) {
      if (nextProps.update_sound.data.status == 200) {
        this.handleOpenSuccessDialog()
      } else if (nextProps.update_sound.data.status == 403) {
        this.setState({error: "ไม่พบไฟล์นี้ในระบบ ไม่สามารถแก้ไขข้อมูลได้"})
        this.handleOpenErrorDialog()
      } else {
        this.setState({error: "เกิดข้อผิดพลาดในระบบ กรุณาติดต่อผู้ดูแล"})
      }
    }
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
    let payload = {
      soundId: this.state.soundId,
      sourceId: this.state.sourceId,
      typeId: this.state.typeId,
      feelingId: this.state.feelingId,
      mean: this.state.mean,
      sd: this.state.sd,
      maleMean: this.state.maleMean,
      femaleMean: this.state.femaleMean,
      teenageMean: this.state.teenageMean,
      oldmanMean: this.state.oldmanMean
    }
    this.props.dispatch(editSoundAction(payload))
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
    this.props.dispatch(clearEditSoundData())
    this.props.dispatch(selectSoundAction())
  }

  handleCancleButton() {
    this.props.dispatch(selectSoundAction())
  }

  render () {
    const { classes } = this.props
    const type = this.props.type
    const feeling = this.props.feeling
    const edit_sound = this.props.edit_sound
    const update_sound = this.props.update_sound

    return (
      <div>
        <Dialog
          open={this.state.openError}
          onClose={this.handleCloseErrorDialog}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>แก้ไขเสียงไม่สำเร็จ</DialogTitle>
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
          <DialogTitle id='alert-dialog-title'>แก้ไขเสียงสำเร็จ</DialogTitle>
          <DialogContent>
            แก้ไขเสียงสำเร็จ กลับสู่หน้าหลัก
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseSuccessDialog.bind(this)} color='primary'>
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
        <div className='panel'>
          <center><h2>
            แก้ไขข้อมูลเสียง
          </h2></center>
          <form>
          <table>
            <tbody>
            <tr>
              <td>เสียง : </td>
              <td>
              {(() => {
                if (this.state.soundUrl) {
                  return (
                    <SoundPlayer soundUrl={this.state.soundUrl}/>
                  )
                }
              })()}</td>
            </tr>
            <tr>
              <td>รหัสเสียง : </td>
              <td>{this.state.soundName.substring(0,9)}</td>
            </tr>
            <tr>
              <td>ประเภทเสียง : </td>
              <td><select value={this.state.typeId} onChange={this.handleTypeChange.bind(this)} >
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
              <td><select value={this.state.feelingId} onChange={this.handleFeelingChange.bind(this)}>
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
              <select value={this.state.sourceId} onChange={this.handleSourceChange.bind(this)}>
                <option value="1">1</option>
              </select>
              </td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' value={this.state.mean} onChange={this.handleMeanChange.bind(this)} /></td>
            </tr>
            <tr>
              <td>ส่วนเบี่ยงเบนมาตรฐาน : </td>
              <td><input type='text' value={this.state.sd} onChange={this.handleSDChange.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มเพศชาย</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' value={this.state.maleMean} onChange={this.handleMaleMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มเพศหญิง</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' value={this.state.femaleMean} onChange={this.handleFemaleMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><h4>กลุ่มอายุ 18 - 35 ปี</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' value={this.state.teenageMean} onChange={this.handleTeenageMean.bind(this)} /></td>
            </tr>
           <tr>
              <td colSpan={2}><h4>กลุ่มอายุ 36 - 60 ปี</h4></td>
            </tr>
            <tr>
              <td>ค่าเฉลี่ย : </td>
              <td><input type='text' value={this.state.oldmanMean} onChange={this.handleOldmanMean.bind(this)} /></td>
            </tr>
            <tr>
              <td colSpan={2}><center><br />
                <button onClick={this.handleSubmitButton.bind(this)}>แก้ไข</button>
                <button onClick={this.handleCancleButton.bind(this)}>ยกเลิก</button>
                </center>
              </td>
            </tr>
            </tbody>
          </table></form>
        </div>
        <style jsx>{`
          .panel {
            display: inline-block;
            background: #ffffff;
            min-height: 100px;
            height: 750px;
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

const mapStateToProps = ({type, feeling, get_sound_id, update_sound}) => ({
  type: type.data,
  feeling: feeling.data,
  edit_sound: get_sound_id.data,
  update_sound: update_sound
})

export default connect(mapStateToProps)(EditSoundForm)
