import React, {useState, useEffect} from 'react';
import Pagination from './../pagination/pagination';
import ProductItem from './ProductItem';
import {getProducts} from './../../api/apiCall';


const Products = () => {
    const [products,setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortItem, setSortItem] = useState('created');
    const [sortDesc, setSortDesc] = useState('DESC');


    useEffect(()=>{
        fetchProducts();
    },[currentPage]);

    const fetchProducts = () => {
        getProducts(`limit=${limit}&page=${currentPage}&sort_id=${sortItem}&sort_desc=${sortDesc}`).then(response=>{
            let data = response.data;
        
            setCount(response.count);
            setLimit(response.limit);
            setCurrentPage(response.page);
            setProducts(data);
        })
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

 

    return (
        <div className='row'>
            <div className='col-12'>
                <h2 className='font-weight-bolder text-left'>View Products</h2>

                <table
                    className='table table-sm table-striped table-dark nowrap'>
                    <thead>
                        <tr>
                            <td>
                                <p className='text-right m-2'>Total: <span className='font-weight-bolder'>{count}</span></p>
                            </td>
                        </tr>
                        <tr className='d-flex'>

                            <th className='col-4'>Name</th>
                            {/* <th className='col-3'>Description</th> */}
                            <th className='col-4'>Price</th>
                            <th className='col-4'>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products ? products.map(item => {
                                return <ProductItem product={item} key={item.id} />
                            })
                                : <tr>No records found</tr>
                        }
                    </tbody>
                </table>
                <Pagination limit={limit} total={count} paginate={paginate} />
            </div>
        </div>
    )
}

export default Products;