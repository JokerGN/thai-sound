import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { selectMainAction, selectInfoAction } from '../actions/selectAction'
import { connect } from 'react-redux'

class IndexBar extends React.Component {

  handleMainPage() {
    this.props.dispatch(mainAction())
  }

  handleInfoPage() {
    this.props.dispatch(infoAction())
  }

  render () {

    return (
      <div>
        <ul>
          <li><p>Thai-sound</p></li>
          <li className="right">
            <a href="#" onClick={this.handleInfoPage.bind(this)}>เกี่ยวกับเรา</a>
          </li>
          <li className="right">
            <Link href="/login">
              <a>คลังเสียง</a>
            </Link>
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
