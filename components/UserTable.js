import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function UserTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell numeric>ชื่อ - นามสกุล</TableCell>
            <TableCell numeric>Email</TableCell>
            <TableCell numeric>เลขประจำตัวประชาชน</TableCell>
            <TableCell numeric>วันที่ลงทะเบียน</TableCell>
            <TableCell numeric>เข้าสู่ระบบล่าสุด</TableCell>
            <TableCell numeric>สถานะ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </Paper>
  );
}

UserTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTable);
