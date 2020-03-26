import React, { Component } from 'react'
import Login from './Login';
import Dashbord from './Dashbord'
import NotFound from './NotFound'
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRouting';
import PublicRoute from './PublicRouting';
import ClientContract from './client-contract';
import AddCampaign from './AddCampaign';
import CampaignTable from './CampaignTable';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={Login} path="/Login" exact />
          <PrivateRoute component={Dashbord} path="/Dashbord" exact />
          <PrivateRoute component={ClientContract} path="/client-contract" exact />
          <PrivateRoute component={CampaignTable} path="/campaign-table" exact />
          <PrivateRoute component={AddCampaign} path="/add-campaign" exact />
          <NotFound path="/"></NotFound>
          <Redirect to="/Login" />
        </Switch>
      </BrowserRouter>
    )
  }
}

{/* <Switch>
<Route exact path="/Login" component={Login} />
<Route path="/Dashbord" component={Dashbord}/>
<Redirect to="/Login"/>
</Switch> */}