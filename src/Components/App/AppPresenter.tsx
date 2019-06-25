import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Detail from 'Routes/Detail';

interface IProps {
  isLoggedIn: boolean;
}

const AppRouter: React.SFC = () => {
  return (
    <Switch>
      <Route path={'/'} exact={true} component={Home}/>
      <Route path={'/detail'} exact={true} component={Detail}/>
      <Redirect from={'*'} to={'/'}/>
    </Switch>
  );
};

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default AppPresenter;
