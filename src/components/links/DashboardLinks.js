import React from 'react';
import Login from './../forms/Login';
import Logout from './../forms/Logout';
import Transactions from './../transactions/Transactions';
import TransactionCard from './../transactions/TransactionCard';
import Products from './../products/Products';


import { Route,Switch } from 'react-router-dom';


const RouteLinks = ()=>  {

    return (
      <div>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/transactions' component={Transactions} />
          <Route path='/transactions/:id' component={TransactionCard} />
          <Route exact path='/products' component={Products}/>
        </Switch>
      </div>
    )
}

export default RouteLinks;