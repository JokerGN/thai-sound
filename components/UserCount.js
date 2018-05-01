import React from 'react'
import {connect} from 'react-redux'
import {getUserAction} from '../actions/getUserAction'

class UserCount extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserAction())
  }

  render() {
    const user = this.props.userList
    return (
      <div>
        <div className='panel'>
          <center>
          <h1>จำนวนผู้ใช้ปัจจุบัน</h1>
          {(() => {
            if (user) {
              return (<h2>{user.count}</h2>)
            }
          })()}
          <h1>คน</h1>
          </center>
        </div>
        <style jsx>{`
          .panel {
            display: inline-block;
            background: #ffffff;
            min-height: 100px;
            height: 200px;
            width: 400px;
            box-shadow:0px 0px 5px 5px #C9C9C9;
            -webkit-box-shadow:2px 2px 5px 5x #C9C9C9;
            -moz-box-shadow:2px 2px 5px 5px #C9C9C9;
            margin: 10px;
            padding: 10px;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({get_user}) => ({
  userList: get_user.data
})

export default connect(mapStateToProps)(UserCount)
