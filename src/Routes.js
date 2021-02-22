import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import VillasContextProvider from './contexts/VillaContext';

 const Routes = () => {
     return (
         <VillasContextProvider>
            <BrowserRouter>

                    <Switch>
                        
                    </Switch>

            </BrowserRouter>
         </VillasContextProvider>
     );
 };
 
 export default Routes;