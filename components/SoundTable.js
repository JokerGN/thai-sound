import React from 'react'
import {connect} from 'react-redux'
import {getSoundAction} from '../actions/getSoundAction'
import SoundPlayer from './SoundPlayer'
import Cookie from 'js-cookie'
const serverUrl = 'http://thai-sound-api.chaluline.com'

class SoundTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(getSoundAction())
  }

  render() {
    const soundList = this.props.soundList
    const role = Cookie.get('role')
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>เสียง</th>
              <th>ที่มา</th>
              <th>ประเภทเสียง</th>
              <th>ลักษณะอารมณ์ความรู้สึก</th>
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
                        <td>{n.typeId}</td>
                        <td></td>
                        <td>{n.mean}</td>
                        <td>{n.sd}</td>
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
            overflow-x: "auto";
          },
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
