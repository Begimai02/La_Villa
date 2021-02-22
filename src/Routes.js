import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

 const Routes = () => {
     return (
         <BrowserRouter>
            <Header>
                <Switch>
                    <Route>
                        
                    </Route>
                </Switch>
            </Header>
         </BrowserRouter>
     );
 };
 
 export default Routes;