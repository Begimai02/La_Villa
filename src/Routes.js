import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainbox from './components/MainBox/Mainbox';
import VillaList from './components/Body/VillaList';
import VillasContextProvider from './contexts/VillaContext';
import UserContextProvider from './contexts/UserContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla';
import Navbar from "./components/Header/Navbar/Navbar";

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/VillaDetail/VillaDetail';
import EditVilla from './Pages/Admin/EditVilla/EditVilla';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import UserAdmin from './Pages/Auth/UserAdmin/UserAdmin';
import Cart from './components/Cart/Cart'
import CartContextProvider from './contexts/CartContext';
import OrderEnd from './BookingForm/OrderEnd';
import CreditCard from './components/Payment/CreditCard';
import BookingForm from './BookingForm/BookingForm';
import MainList from './components/Body/MainCards/MainList';

const Routes = () => {
  return (
    <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
      <VillasContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Mainbox} />
              <Route exact path="/mainlist" component={MainList} />
              <Route exact path="/list" component={VillaList} />
              <Route exact path="/add" component={AddVilla} />
              <Route exact path="/" />
              {/* здесь будут линки навбара надо сделать для них routes */}

              {/* <Footer/> */}
              <Route exact path="/payment" component={CreditCard} />
              <Route exact path="/booking" component={BookingForm} />
              <Route exact path="/order" component={OrderEnd} />


              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/isadmin" component={UserAdmin} /> {/*  main */}
              <Route exact path="/admin" component={Admin} /> {/*  main */}
              <Route exact path="/detail/:id" component={VillaDetail} />  {/*ADD HERE /:id -------!!!!!!!!!!!!!!!!!1 */}
              <Route exact path="/edit/:id" component={EditVilla} /> {/*  main */}
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </VillasContextProvider>
    </UserContextProvider>
  );
};

export default Routes;