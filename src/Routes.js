import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainbox from './components/MainBox/Mainbox';
import VillaList from './components/Body/VillaList';
import VillasContextProvider from './contexts/VillaContext';
import UserContextProvider from './contexts/UserContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'
import BookingForm from './BookingForm/BookingForm';
import CreditCard from './components/Payment/CreditCard';

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/VillaDetail/VillaDetail';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Header/Navbar/Navbar";
import Cart from './components/Cart/Cart'
import CartContextProvider from './contexts/CartContext';
import OrderEnd from './BookingForm/OrderEnd';

const Routes = () => {
    return (
        <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
            <VillasContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Mainbox} />
                            <Route exact path="/list" component={VillaList} />
                            <Route exact path="/add" component={AddVilla} />
                            <Route exact path="/" />
                            {/* здесь будут линки навбара надо сделать для них routes */}
                        
                        <Route exact path="/admin" component={Admin} /> {/*  main */}
                        <Route exact path="/detail" component={VillaDetail} />
                    {/* <Footer/> */}
                            <Route exact path="/admin" component={Admin} /> {/*  main */}
                            <Route exact path="/detail" component={VillaDetail} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/payment" component={CreditCard} />
                            <Route exact path="/booking" component={BookingForm} />
                            <Route exact path="/order" component={OrderEnd} />


                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </VillasContextProvider>
        </UserContextProvider>
    );
};

export default Routes;