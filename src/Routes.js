import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Mainbox from './components/MainBox/Mainbox';
import VillasContextProvider from './contexts/VillaContext';
=======
import VillaList from './components/Body/VillaList';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import UserContextProvider from './contexts/UserContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'
import Navbar from "./components/Header/Navbar/Navbar"
>>>>>>> 94050d089b298453895d2aad166f4145386f9dd4

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/VillaDetail/VillaDetail';

const Routes = () => {
    return (
      <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
        <VillasContextProvider>
            <BrowserRouter>
<<<<<<< HEAD
=======
                <Switch>
                    <Route exact path="/list" component={VillaList} />
                    <Route exact path="/add" component={AddVilla} />
                </Switch>
                <Header/>
>>>>>>> 94050d089b298453895d2aad166f4145386f9dd4
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