import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';

 const Routes = () => {
     return (
         <VillasContextProvider>
            <BrowserRouter>
                <Header>
                    <Switch>
                        <Route>

                        </Route>
                    </Switch>
                </Header>
            </BrowserRouter>
         </VillasContextProvider>
     );
 };
 
 export default Routes;