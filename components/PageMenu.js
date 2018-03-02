import React from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'
import Menu from './Menu'
import NavBar from './NavBar'
import UserTable from './UserTable'
import SoundTable from './SoundTable'
import AddSoundForm from './AddSoundForm'
import {selectInsertAction} from '../actions/selectAction'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Link from 'next/link'
import Cookie from 'js-cookie'

class PageMenu extends React.Component {

  handleInsertSelect() {
    this.props.dispatch(selectInsertAction())
  }

  render () {
    const { classes} = this.props
    const component = this.props.component
    const role = Cookie.get('role')

    return (
    <Grid>
      <Row>
        <Col xs={12} md={12}>
        <NavBar />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2}>
        <Menu />
        </Col>
        <Col xs={8} md={10}>
        {(() => {
          if (component === 'index') {
            return (
              <div>
                <p>This is index content</p>
              </div>
            )
          } else if (component === 'sound') {
            return (
              <div>
                {(() => {
                  if (role === 'admin') {
                    return (
                      <div>
                        <button onClick={this.handleInsertSelect.bind(this)}>เพิ่ม</button>
                      </div>
                    )
                  }
                })()}
                <SoundTable />
              </div>
            )
          } else if (component === 'insert'){
            return (
              <div>
                <AddSoundForm />
              </div>
            )
          } else {
            return (
              <div>
                <UserTable />
              </div>
            )
          }
        })()}
        </Col>
      </Row>
    </Grid>
    )
  }
}

const mapStateToProps = ({component}) => ({
  component: component
})

export default connect(mapStateToProps)(PageMenu)
