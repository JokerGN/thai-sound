import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { selectMainAction, selectInfoAction, selectLoginAction, selectRegisterAction} from '../actions/selectAction'
import { connect } from 'react-redux'

class IndexBar extends React.Component {

  handleMainPage() {
    this.props.dispatch(selectMainAction())
  }

  handleInfoPage() {
    this.props.dispatch(selectInfoAction())
  }

  handleLoginPage() {
    this.props.dispatch(selectLoginAction())
  }

  handleRegisterPage() {
    this.props.dispatch(selectRegisterAction())
  }

  render () {

    return (
      <div>
        <ul>
          <li><p>Thai-sound</p></li>
          <li className="right">
            <a href="#" onClick={this.handleLoginPage.bind(this)}>เข้าสู่ระบบ</a>
          </li>
          <li className="right">
            <a href="#" onClick={this.handleRegisterPage.bind(this)}>สมัครสมาชิก</a>
          </li>
          <li className="right">
            <a href="#">ติดต่อเรา</a>
          </li>
          <li className="right">
            <a href="#">เครื่องมือวัด</a>
          </li>
          <li className="right">
            <a href="#" onClick={this.handleInfoPage.bind(this)}>เกี่ยวกับเรา</a>
          </li>
          <li className="right">
            <a href="#" onClick={this.handleMainPage.bind(this)}>หน้าหลัก</a>
          </li>
        </ul>

        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #67a806;
            width: 100%;
            box-shadow: 1px 1px 1px grey;
          }
          li {
            float: left;
          }
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
          li a:hover {
            background-color: white;
            color: #67a806;
          }
          .right {
            float: right;
          }
          p {
            margin: 0;
            padding: 0;
          }
          li p {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({page}) => ({
  page: page
})

export default connect(mapStateToProps)(IndexBar)
