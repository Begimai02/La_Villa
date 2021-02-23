import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainbox from './components/MainBox/Mainbox';
import VillaList from './components/Body/VillaList';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import UserContextProvider from './contexts/UserContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'
import Navbar from "./components/Header/Navbar/Navbar"

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/VillaDetail/VillaDetail';

const Routes = () => {
    return (
      <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
        <VillasContextProvider>
            <BrowserRouter>
                    <Switch>
                        
                            <Route exact path="/" component={Mainbox} />
                            {/* здесь будут линки навбара надо сделать для них routes */}
                        
                        <Route exact path="/admin" component={Admin} /> {/*  main */}
                        <Route exact path="/detail" component={VillaDetail} />
                    </Switch>
            </BrowserRouter>
        </VillasContextProvider>
      </UserContextProvider>
    );
};

export default Routes;