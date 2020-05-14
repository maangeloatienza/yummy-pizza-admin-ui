import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        
            <nav className="col-sm-3 col-md-2 col-lg-2  bg-light sidebar collapse show d-md-block d-md-flex">
                <div className="">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={''} className="nav-link active">
                                <span data-feather="home"></span>
                                Dashboard <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link to={'/transactions'} className="nav-link">
                                <i className="fa fa-shopping-cart mx-1"></i>
                                Orders
                            </Link> */}
                            <a className="nav-link collapsed text-truncate" href="#orderMenu" data-toggle="collapse" data-target="#orderMenu">
                                <i className="fa fa-shopping-cart mx-1"></i>Orders</a>
                                <div className="collapse" id="orderMenu" aria-expanded="false">
                                    <ul className="flex-column pl-2 nav">
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link py-0" 
                                                to={'/transaction/create'}>
                                                <span>Create order</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link py-0"
                                                to={'/transactions'}>
                                                <span>View orders</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                        </li>
                        <li className="nav-item">
                            {/* <Link to={'/products'} className="nav-link">
                                <i className="fa fa-cutlery mx-1"></i>
                                Products
                            </Link> */}

                            <a className="nav-link collapsed text-truncate" href="#productMenu" data-toggle="collapse" data-target="#productMenu">
                                <i className="fa fa-cutlery mx-1"></i>Products</a>
                            <div className="collapse" id="productMenu" aria-expanded="false">
                                <ul className="flex-column pl-2 nav">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link py-0"
                                            to={'/product/create'}>
                                            <span>Create Product</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link py-0"
                                            to={'/products'}>
                                            <span>View products</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={'/users'} className="nav-link">
                                <i className="fa fa-users mx-1"></i>
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={''} className="nav-link">
                                <i className="fa fa-bar-chart mx-1"></i>
                                Reports
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/banners'} className="nav-link">
                                <i className="fa fa-cogs mx-1"></i>
                                Banner Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
      
    )
}

export default Sidebar;