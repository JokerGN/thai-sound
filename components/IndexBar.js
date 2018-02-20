import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

class IndexBar extends React.Component {

  render () {

    return (
      <div>
        <ul>
          <li><p>Thai-sound</p></li>
          <li className="right">
          <Link href="/info">
            <a>เกี่ยวกับเรา</a>
          </Link>
        </li>
          <li className="right">
            <Link href="/login">
              <a>คลังเสียง</a>
            </Link>
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

export default IndexBar
