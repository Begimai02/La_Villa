import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VillaList from './components/Body/VillaList';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'
import Navbar from "./components/Header/Navbar/Navbar"
import BookingForm from './BookingForm/BookingForm';
import CreditCard from './components/Payment/CreditCard';

const Routes = () => {
    return (
        <VillasContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/list" component={VillaList} />
                    <Route exact path="/add" component={AddVilla} />
                    <Route exact path="/credit" component={CreditCard} />
                </Switch>
                {/* <Header/> */}
                    <Switch>
                        <Route exact path="/"/>
                        {/* здесь будут линки навбара надо сделать для них routes */}
                        <BookingForm/>
                    </Switch>
                
            </BrowserRouter>
        </VillasContextProvider>
    );
};

export default Routes;