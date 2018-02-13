import React from 'react'
import {connect} from 'react-redux'
import {getUserAction} from '../actions/getUserAction'
import Moment from 'moment-timezone'

class UserTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserAction())
  }

  render() {
    const userList = this.props.userList
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
              <th>ชื่อ - นามสกุล</th>
              <th>E-mail</th>
              <th>เลขประจำตัวประชาชน</th>
              <th>เข้าสู่ระบบล่าสุด</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {(() => {
              if (userList) {
                return (
                  userList.rows.map((n, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td><button className="update">แก้ไข</button></td>
                        <td><button className="delete">ลบ</button></td>
                        <td>{n.firstName + ' ' + n.lastName}</td>
                        <td>{n.email}</td>
                        <td>{n.citizenId}</td>
                        <td>{Moment(n.loginAt).tz('Asia/Bangkok').format('DD/MM/YY HH:mm:ss')}</td>
                        <td>{n.status}</td>
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
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({get_user}) => ({
  userList: get_user.data
})

export default connect(mapStateToProps)(UserTable)
