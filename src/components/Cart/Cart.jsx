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
import { Link } from 'react-router-dom';
import './Cart.css'


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
    backgroundColor: '#FDFB30'
  }
});

export default function CustomizedTables() {
  let { cart, getDiamondsInCart, deleteDiamonds } = useContext(cartContext)

  let [totalCount, setTotalCount] = useState(0)

  const classes = useStyles();
  useEffect(() => {
    let price = totalCount;
    cart?.map(item => {
      price += +item.price
    })
    getDiamondsInCart(cart);
    setTotalCount(price)
console.log(totalCount);
  }, [])


  return (
    <>
    <h1>Shopping Cart</h1>
      <TableContainer  component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className={classes.title}>
              <StyledTableCell>Your Orders</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Size</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item, index) => (
              <StyledTableRow key={index + "cart"}>
                <StyledTableCell component="th" scope="row">
                  {item.title}
                </StyledTableCell>
                <StyledTableCell align="right">${item.price}</StyledTableCell>
                <StyledTableCell align="right">1</StyledTableCell>
                <StyledTableCell align="right">{item.place}</StyledTableCell>
                <StyledTableCell align="right">{item.size} sq mtr</StyledTableCell>
                <StyledTableCell align="right"><button onClick={() => deleteDiamonds(item.id)} >&times;</button></StyledTableCell>
              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '15px', textDecoration: 'none'}} >
      <Link to="/booking">
          <button>BUY</button>
      </Link>
        </div>
    </>
  );
}

