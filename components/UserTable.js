import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import {connect} from 'react-redux'
import {getUserAction} from '../actions/getUserAction'
import Moment from 'moment-timezone'
import Build from 'material-ui-icons/Build'
import Delete from 'material-ui-icons/Delete'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    padding: '0 0',
  },
  button: {
    width: '10px',
    height: '10px'
  }
})

class UserTable extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserAction())
  }

  render() {
    const { classes } = this.props
    const userList = this.props.userList

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow style={{padding: 0}}>
              <TableCell>#</TableCell>
              <TableCell padding='checkbox'>ชื่อ - นามสกุล</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>เลขประจำตัวประชาชน</TableCell>
              <TableCell>วันที่ลงทะเบียน</TableCell>
              <TableCell>เข้าสู่ระบบล่าสุด</TableCell>
              <TableCell>สถานะ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(() => {
              if (userList) {
                return (
                  userList.rows.map((n,index) => {
                    return (
                      <TableRow key={index}>
                      <TableCell>
                        <Button className={classes.button} color='primary'><Build /></Button>
                        <Button className={classes.button} color='accent'><Delete /></Button>
                        </TableCell>
                      <TableCell>{n.firstName + ' ' + n.lastName}</TableCell>
                      <TableCell>{n.email}</TableCell>
                      <TableCell>{n.citizenId}</TableCell>
                      <TableCell>{Moment(n.createdAt).tz('Asia/Bangkok').format('DD/MM/YY HH:mm:ss')}</TableCell>
                      <TableCell>{Moment(n.loginAt).tz('Asia/Bangkok').format('DD/MM/YY HH:mm:ss')}</TableCell>
                      <TableCell>{n.status}</TableCell>
                    </TableRow>
                    )
                  })
                )
              }
            })()}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

UserTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = ({get_user}) => ({
  userList: get_user.data
})

export default connect(mapStateToProps)(withStyles(styles)(UserTable))
