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

const Routes = () => {
  return (
    <UserContextProvider>  {/*нужен для регистрации. Я создала отдельный контекст для регистрации*/}
      <VillasContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/list" component={VillaList} />
            <Route exact path="/add" component={AddVilla} />
            

            <Route exact path="/" component={Mainbox} />
            {/* здесь будут линки навбара надо сделать для них routes */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/isadmin" component={UserAdmin} /> {/*  main */}
            <Route exact path="/admin" component={Admin} /> {/*  main */}
            <Route exact path="/detail/:id" component={VillaDetail} />  {/*ADD HERE /:id -------!!!!!!!!!!!!!!!!!1 */}
            <Route exact path="/edit/:id" component={EditVilla} /> {/*  main */}
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </VillasContextProvider>
    </UserContextProvider>
  );
};

export default Routes;