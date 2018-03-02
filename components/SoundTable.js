import React from 'react'
import {connect} from 'react-redux'
import {getSoundAction} from '../actions/getSoundAction'
import SoundPlayer from './SoundPlayer'
import Cookie from 'js-cookie'
const serverUrl = 'http://thai-sound-api.chaluline.com'
const devServerUrl = 'http://localhost:3001'

class SoundTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSoundAction())
  }

  render() {
    const soundList = this.props.soundList
    const role = Cookie.get('role')
    console.log(soundList)
    return (
      <div>
        <table>
          <thead className='tablehead'>
            <tr>
              <th>#</th>
              <th>เสียง</th>
              <th>ที่มา</th>
              <th>ประเภทเสียง</th>
              <th>ลักษณะอารมณ์ความรู้สึก</th>
              <th colspan={2}>เพศชาย</th>
              <th colspan={2}>เพศหญิง</th>
              <th colspan={2}>อายุ 18-35 ปี</th>
              <th colspan={2}>อายุ 36-60 ปี</th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>Mean</th>
              <th>SD</th>
              <th>Mean</th>
              <th>SD</th>
              <th>Mean</th>
              <th>SD</th>
              <th>Mean</th>
              <th>SD</th>
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
                        <td>{n.sourceId}</td>
                        <td>{n.type.typeName}</td>
                        <td>{n.feeling.feelingName}</td>
                        <td>{n.maleMean}</td>
                        <td>{n.maleSD}</td>
                        <td>{n.femaleMean}</td>
                        <td>{n.femaleSD}</td>
                        <td>{n.teenageMean}</td>
                        <td>{n.teenageSD}</td>
                        <td>{n.oldmanMean}</td>
                        <td>{n.oldmanSD}</td>
                        {(()=> {
                          if (role === 'admin') {
                            return (
                              <td>
                                <button>แก้ไข</button>
                                <button>ลบ</button>
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

const mapStateToProps = ({get_sound}) => ({
  soundList: get_sound.data
})

export default connect(mapStateToProps)(SoundTable)
