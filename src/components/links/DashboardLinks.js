import React from 'react';
import Login from './../forms/Login';
import Logout from './../forms/Logout';
import Transactions from './../transactions/Transactions';
import CreateTransaction from '../transactions/CreateTransaction';
import TransactionCard from './../transactions/TransactionCard';
import Products from './../products/Products';
import CreateProduct from './../products/CreateProduct'
import Users from './../users/Users';
import UserCard from './../users/UserCard';
import Banners from './../banners/Banner';


import { Route,Switch } from 'react-router-dom';


const RouteLinks = ()=>  {

    return (
      
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route exact path='/transactions' component={Transactions} />
          <Route exact path='/transactions/:id' component={TransactionCard} />
          <Route path='/transaction/create' component={CreateTransaction}/>
          <Route exact path='/products' component={Products} />
          <Route path='/product/create' component={CreateProduct} />
          <Route exact path='/users' component={Users} />
          <Route path='/users/:id' component={UserCard}/>
          <Route exact path='/banners' component={Banners} />
        </Switch>
     
    )
}

export default RouteLinks;