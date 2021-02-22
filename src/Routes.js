import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import Navbar from "./components/Header/Navbar/Navbar";

import Admin from './Pages/Auth/Admin';
import VillaDetail from './Pages/VillaDetail/VillaDetail';

const Routes = () => {
  return (
    <VillasContextProvider>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" />
          {/* здесь будут линки навбара надо сделать для них routes */}

          <Route exact path="/admin" component={Admin} />
          <Route exact path="/detail" component={VillaDetail} />
        </Switch>

      </BrowserRouter>
    </VillasContextProvider>
  );
};

export default Routes;