import React from 'react'
import { connect } from 'react-redux'
import Cookie from 'js-cookie'
import Router from 'next/router'
import { logoutAction } from '../actions/loginAction'

class NavBar extends React.Component {

  handleLogout() {
    this.props.dispatch(logoutAction())
    Cookie.remove('username')
    Router.push('/')
  }

  render () {
    const user = Cookie.get('username')
    return (
      <div>
        <ul>
          <li><p>Thai-sound</p></li>
          <li className="right"><a href="#" onClick={this.handleLogout.bind(this)}>ออกจากระบบ</a></li>
          <li className="right"><p>User: {user}</p></li>
        </ul>

        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #4db8ff;
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
            color: #4db8ff;
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

export default connect()(NavBar)
