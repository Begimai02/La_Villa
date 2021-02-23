import React, { useContext, useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { cartContext } from '../../contexts/CartContext';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(title, location, size, carbs, protein) {
  //createData(title, 159, 6.0, 24, 4.0),
  return { title, location, size, carbs, protein };
}

// [1 item,2,3]

const rows = [
  createData('item.title', 159, 1, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  let { cart, getVillasInCart, deleteVilla } = useContext(cartContext)
  // let [obj, setObj] = useState(cart)
  const classes = useStyles();
  useEffect(() => {
    getVillasInCart()
  }, [])



  return (
    <>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ВАШИ ЗАКАЗЫ</StyledTableCell>
              <StyledTableCell align="right">ЦЕНА</StyledTableCell>
              <StyledTableCell align="right">КОЛИЧЕСТВО</StyledTableCell>
              <StyledTableCell align="right">МЕСТОНАХОЖДЕНИЕ</StyledTableCell>
              <StyledTableCell align="right">КВАДРАТУРА</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item, index) => (
              <StyledTableRow key={index + "cart"}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
              </StyledTableCell>
                <StyledTableCell align="right">{item.price}</StyledTableCell>
                <StyledTableCell align="right">1</StyledTableCell>
                <StyledTableCell align="right">{item.place}</StyledTableCell>
                <StyledTableCell align="right">{item.size}</StyledTableCell>
                <StyledTableCell align="right"><button onClick={() => deleteVilla(item.id)} >&times;</button></StyledTableCell>

                {/* <button>&times;</button> */}
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}

