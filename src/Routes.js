import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VillaList from './components/Body/VillaList';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';
import AddVilla from './Pages/Admin/AddVilla/AddVilla'
import Navbar from "./components/Header/Navbar/Navbar"

const Routes = () => {
    return (
        <VillasContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/list" component={VillaList} />
                    <Route exact path="/add" component={AddVilla} />
                </Switch>
                <Header/>
                    <Switch>
                        <Route exact path="/"/>
                        {/* здесь будут линки навбара надо сделать для них routes */}
                        
                    </Switch>
                
            </BrowserRouter>
        </VillasContextProvider>
    );
};

export default Routes;