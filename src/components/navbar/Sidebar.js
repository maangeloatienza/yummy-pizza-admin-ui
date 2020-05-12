import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        
            <nav className="col-md-2 d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={''} className="nav-link active">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/transactions'} className="nav-link">
                                <span data-feather="file"></span>
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/products'} className="nav-link">
                                <span data-feather="shopping-cart"></span>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link">
                                <span data-feather="users"></span>
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link">
                                <span data-feather="bar-chart-2"></span>
                                Reports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link">
                                <span data-feather="layers"></span>
                                Integrations
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
      
    )
}

export default Sidebar;