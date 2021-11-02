import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ExchangeRate from './components/ExchangeRate/ExchangeRate';
import SettingsPage from './components/SettingsPage/SettingsPage';

const AppRouter = ( { data, content, setContent, update }) => {  

  return ( 
    <Switch>
        <Route path="/exchange">
          <ExchangeRate content={content} update={update}/>
        </Route>
        <Route path="/settings">
          <SettingsPage data={data} content={content} setContent={setContent}/>
        </Route>
        <Route path="/">
          <Redirect to="/exchange"/>
        </Route>
    </Switch> 
   );
}
 
export default AppRouter;