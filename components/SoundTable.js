import React from 'react'
import {connect} from 'react-redux'
import {getSoundAction} from '../actions/getSoundAction'
import { deleteSoundAction, clearDeleteSoundData, searchSoundAction} from '../actions/soundAction'
import { getFeelingAction } from '../actions/getFeelingAction'
import { getTypeAction } from '../actions/getTypeAction'
import SoundPlayer from './SoundPlayer'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Cookie from 'js-cookie'
const serverUrl = 'http://thai-sound-api.chaluline.com'
const devServerUrl = 'http://localhost:3001'

class SoundTable extends React.Component {

  state = {
    open: false,
    payload: {},
    typeId: 1,
    feelingId: 1,
    search: false
  }

  componentDidMount() {
    this.props.dispatch(getSoundAction())
    this.props.dispatch(getTypeAction())
    this.props.dispatch(getFeelingAction({typeId: 1}))
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps.delete_sound) {
      if (nextProps.delete_sound.data.status == 200) {
        this.props.dispatch(clearDeleteSoundData())
        this.props.dispatch(getSoundAction())
      }
    }
  }

  handleDeleteButton(soundId) {
    this.setState({payload: {soundId: soundId}})
    this.handleOpenDialog()
  }

  handleOpenDialog() {
    this.setState({open: true})
  }

  handleYesButton() {
    this.setState({open: false})
    this.props.dispatch(deleteSoundAction(this.state.payload))
  }

  handleNoButton() {
    this.setState({open: false})
  }

  handleFeelingChange(e) {
    this.setState({feelingId: e.target.value})
  }

  handleTypeChange(e) {
    this.setState({typeId: e.target.value})
    this.props.dispatch(getFeelingAction({typeId: e.target.value}))
  }

  handleSearchButton() {
    this.setState({search: true})
    let payload = {
      typeId: this.state.typeId,
      feelingId: this.state.feelingId
    }
    this.props.dispatch(searchSoundAction(payload))
  }

  render() {
    let soundList = null
    if (this.state.search) {
      soundList = this.props.search_sound
    } else {
      soundList = this.props.soundList
    }
    const feeling = this.props.feeling
    const type = this.props.type
    const role = Cookie.get('role')
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleNoButton}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>ยืนยันการลบเสียง</DialogTitle>
          <DialogContent>
            คุณต้องการลบเสียงนี้หรือไม่
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleYesButton.bind(this)} color='primary'>
              ตกลง
            </Button>
            <Button onClick={this.handleNoButton.bind(this)} color='primary'>
              ยกเลิก
            </Button>
          </DialogActions>
        </Dialog>
        <div>
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
            </select>&nbsp;&nbsp;&nbsp;
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
            </select>&nbsp;&nbsp;&nbsp;
            <button onClick={this.handleSearchButton.bind(this)}>ค้นหา</button>
        </div>
        <table>
          <thead className='tablehead'>
            <tr>
              <th>ลำดับที่</th>
              <th>เสียง</th>
              <th>รหัสเสียง</th>
              <th>ที่มา</th>
              <th>ประเภทเสียง</th>
              <th>ลักษณะอารมณ์ความรู้สึก</th>
              <th>MEAN</th>
              <th>SD</th>
              <th colSpan={4}>MEAN แยกตามกลุ่มตัวอย่าง</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>เพศขาย</th>
              <th>เพศหญิง</th>
              <th>อายุ 18-35 ปี</th>
              <th>อายุ 36-60 ปี</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              if (soundList) {
                return (
                  soundList.rows.map((n, index) => {
                    return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td><SoundPlayer soundUrl={serverUrl+'/sound/'+n.soundUrl}/></td>
                        <td>{n.soundName}</td>
                        <td>{n.sourceId}</td>
                        <td>{n.type.typeName}</td>
                        <td>{n.feeling.feelingName}</td>
                        <td>{n.mean}</td>
                        <td>{n.sd}</td>
                        <td>{n.maleMean}</td>
                        <td>{n.femaleMean}</td>
                        <td>{n.teenageMean}</td>
                        <td>{n.oldmanMean}</td>
                        {(()=> {
                          if (role === 'admin') {
                            return (
                              <td>
                                <button>แก้ไข</button>
                                <button onClick={this.handleDeleteButton.bind(this, n.soundId)}>ลบ</button>
                              </td>
                             )
                          } else {
                            return (
                              <td><button><a href={serverUrl+'/sound/'+n.soundUrl}>ดาวน์โหลด</a></button></td>
                            )
                          }
                        })()}
                      </tr>
                    )
                  })
                )
              }
            })()}
          </tbody>
        </table>
        <style jsx>{`
          table {
            width: 100%;
            text-align: center;
            overflow-x: auto;
            background-color: white;
          }
          button {
            font-family: Kanit;
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
          }
          .update:hover {
            background-color: white;
            cursor: pointer;
          }
          .update {
            background-color: #ffc34d;
          }
          .delete {
            background-color: #ff5050;
          }
          .delete:hover {
            background-color: white;
            cursor: pointer;
          }
          .block {
            background-color: #ed1212;
          }
          .block:hover {
            background-color: white;
            cursor: pointer;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({get_sound, delete_sound, type, feeling, search_sound}) => ({
  soundList: get_sound.data,
  search_sound: search_sound.data,
  delete_sound: delete_sound,
  type: type.data,
  feeling: feeling.data,
})

export default connect(mapStateToProps)(SoundTable)
