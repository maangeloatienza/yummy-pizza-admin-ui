import React from 'react';
import Login from './../forms/Login';
import Logout from './../forms/Logout';
import Transactions from './../transactions/Transactions';
import TransactionCard from './../transactions/TransactionCard';
import Products from './../products/Products';
import Users from './../users/Users';


import { Route,Switch } from 'react-router-dom';


const RouteLinks = ()=>  {

    return (
      
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/transactions' component={Transactions} />
          <Route path='/transactions/:id' component={TransactionCard} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/users' component={Users}/>
        </Switch>
     
    )
}

export default RouteLinks;