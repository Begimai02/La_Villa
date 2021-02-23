import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Mainbox from './components/MainBox/Mainbox';
import VillasContextProvider from './contexts/VillaContext';

 const Routes = () => {
     return (
         <VillasContextProvider>
            <BrowserRouter>
                    <Switch>
                        
                            <Route exact path="/" component={Mainbox} />
                            {/* здесь будут линки навбара надо сделать для них routes */}
                        
                    </Switch>
            </BrowserRouter>
         </VillasContextProvider>
     );
 };
 
 export default Routes;