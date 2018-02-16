import React from 'react'
import Cookie from 'js-cookie'
import { connect } from 'react-redux'
import { indexAction, soundAction, userAction } from '../actions/selectAction'

class Menu extends React.Component {

  handleIndexComponent() {
    this.props.dispatch(indexAction())
  }

  handleSoundComponent() {
    this.props.dispatch(soundAction())
  }

  handleUserComponent() {
    this.props.dispatch(userAction())
  }

  render () {
    const role = Cookie.get('role')
    return (
      <div>
        {(() => {
          if (role === 'user') {
            return (
              <ul>
                <li><a href="#" onClick={this.handleIndexComponent.bind(this)}>หน้าหลัก</a></li>
                <li><a href="#" onClick={this.handleSoundComponent.bind(this)}>เสียง</a></li>
              </ul>
            )
          } else {
            return (
              <ul>
                <li><a href="#" onClick={this.handleIndexComponent.bind(this)}>หน้าหลัก</a></li>
                <li><a href="#" onClick={this.handleSoundComponent.bind(this)}>จัดการเสียง</a></li>
                <li><a href="#" onClick={this.handleUserComponent.bind(this)}>จัดการผู้ใช้</a></li>
              </ul>
            )
          }
        })()}

        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          li a {
            display: block;
            color: #000;
            padding: 8px 16px;
            text-decoration: none;
            border-right: groove;
            border-color: #d2dff4;
          }
          li a:hover {
            background-color: #4db8ff;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = ({component}) => ({
  component: component
})

export default connect(mapStateToProps)(Menu)
