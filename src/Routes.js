import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VillaList from './components/Body/VillaList';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'

const Routes = () => {
    return (
        <VillasContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/list" component={VillaList} />
                    <Route exact path="/add" component={AddVilla} />
                </Switch>
            </BrowserRouter>
        </VillasContextProvider>
    );
};

export default Routes;