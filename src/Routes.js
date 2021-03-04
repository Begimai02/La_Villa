import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainbox from './components/MainBox/Mainbox';
import DiamondsList from './components/Body/DiamondsList';
import UserContextProvider from './contexts/UserContext';
import addDiamonds from './Pages/Admin/AddDiamonds/AddDiamonds';
import Navbar from "./components/Header/Navbar/Navbar";

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/DiamondsDetail/DiamondsDetail';
import EditVilla from './Pages/Admin/EditDiamonds/EditDiamonds';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import UserAdmin from './Pages/Auth/UserAdmin/UserAdmin';
import Cart from './components/Cart/Cart'
import CartContextProvider from './contexts/CartContext';
import OrderEnd from './BookingForm/OrderEnd';
import CreditCard from './components/Payment/CreditCard';
import BookingForm from './BookingForm/BookingForm';
import MainList from './components/Body/MainCards/MainList';
import Favorite from './components/Favorite/Favorite';
import FooterNew from './components/Footer/FooterNew';
import CommentContextProvider from './contexts/CommentContext';
import testEnd from './BookingForm/testEnd';
import DiamondContextProvider from './contexts/ProductsContext';

const Routes = () => {
  return (
    <UserContextProvider>
      <DiamondContextProvider>
        <CartContextProvider>
          <CommentContextProvider>
            <BrowserRouter>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Mainbox} />
                <Route exact path="/mainlist" component={MainList} />
                <Route exact path="/list" component={DiamondsList} />
                <Route exact path="/add" component={addDiamonds} />
                <Route exact path="/" />

                <Route exact path="/payment" component={CreditCard} />
                <Route exact path="/booking" component={BookingForm} />
                <Route exact path="/order" component={OrderEnd} />


                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/isadmin" component={UserAdmin} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/detail/:id" component={VillaDetail} />
                <Route exact path="/edit/:id" component={EditVilla} />
                <Route exact path="/cart" component={Cart} />

                <Route exact path="/favorite" component={Favorite} />
                <Route exact path="/book" component={testEnd} />
              </Switch>
              <FooterNew />
            </BrowserRouter>
          </CommentContextProvider>
        </CartContextProvider>
      </DiamondContextProvider>
    </UserContextProvider>
  );
};

export default Routes;