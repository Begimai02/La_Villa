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
import EditVilla from './Pages/Admin/EditVilla/EditVilla';

const Routes = () => {
    return (
      <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
        <VillasContextProvider>
            <BrowserRouter>
<<<<<<< HEAD
                <Switch>
                    <Route exact path="/list" component={VillaList} />
                    <Route exact path="/add" component={AddVilla} />

                        <Route exact path="/"/>
                        {/* здесь будут линки навбара надо сделать для них routes */}
=======
                    <Switch>
                        
                            <Route exact path="/" component={Mainbox} />
                            {/* здесь будут линки навбара надо сделать для них routes */}
>>>>>>> ff8cef1bdf6d9dee1042aa727540c5033a1cd72a
                        
                        <Route exact path="/admin" component={Admin} /> {/*  main */}
                        <Route exact path="/detail/:id" component={VillaDetail} />
                        <Route exact path="/edit/:id" component={EditVilla} /> {/*  main */}
                    </Switch>
            </BrowserRouter>
        </VillasContextProvider>
      </UserContextProvider>
    );
};

export default Routes;