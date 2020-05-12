import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Login from './../forms/Login';
import Sidebar from './Sidebar';
import DashboardLinks from './../links/DashboardLinks';

import {getToken} from './../../utils/Commons';


const Navbar = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        console.log('TOKEN',isLoggedIn);
        authUser();
    },[])

    const authUser = () =>{
        let token = getToken() ? true : false
        setIsLoggedIn(token);
    }

    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <Link to={'/'} className="navbar-brand col-sm-3 col-md-2 mr-0" >Company name</Link>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            {
                                isLoggedIn ? <Link to={'/logout'} className="nav-link" >Sign out</Link> : ''
                            }
                        </li>
                    </ul>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    {
                        isLoggedIn ? <Sidebar /> : <Login authUser={authUser} /> 
                    }
                    <div className='col-sm-9 col-md-9 col-lg-9 ml-sm-auto col-lg-10 pt-3 px-4'>
                        <DashboardLinks/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;