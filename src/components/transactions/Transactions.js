import React, {useState,useEffect} from 'react';
import TransactionItem from './TransactionItem';
import Pagination from './../pagination/pagination';
import {getTransactions} from './../../api/apiCall';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage,setCurrentPage] = useState(1);
    const [limit,setLimit] = useState(10);
    const [sortItem, setSortItem] = useState('created');
    const [sortDesc,setSortDesc] = useState('DESC');
    
    let sortToggle = false;

    
    useEffect(()=>{
        fetchTransactions();
    }, [currentPage, sortDesc])

    const fetchTransactions = () =>{
        getTransactions(`limit=${limit}&page=${currentPage}&sort_id=${sortItem}&sort_desc=${sortDesc}`).then(response=>{
            let data = response.data;

            setCount(response.count);
            setLimit(response.limit);
            setCurrentPage(response.page);
            setTransactions(data);
        });
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const sortPage = (sortItem,sortToggle) => {
        setSortItem(sortItem);
        setSortDesc(sortToggle? 'ASC' : 'DESC' );
    }

    return (
        <div className='container'>
            <h2 className='font-weight-bolder text-left'>View Orders</h2>

            <table
                className='table table-sm table-striped table-dark mx-auto'
                data-page-size={limit}>
                <thead>
                    <tr>
                        <td>
                            <p className='text-right m-2'>Total: <span className='font-weight-bolder'>{count}</span></p>
                        </td>
                    </tr>
                    <tr className='d-flex'>
                        <th className='col-3' onClick={()=>sortPage('code',sortToggle = !sortToggle)}>Code</th>
                        <th className='col-3' onClick={() => sortPage('first_name', sortToggle = !sortToggle)}>Name</th>
                        <th className='col-3' onClick={() => sortPage('created', sortToggle = !sortToggle)}>Date Ordered</th>
                        <th className='col-1' onClick={() => sortPage('total', sortToggle = !sortToggle)}>Total</th>
                        <th className='col-2'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions? transactions.map(item=>{
                            return <TransactionItem transaction={item} key={item.id}/>
                        })
                        : <tr>
                                <td>No records found</td>
                        </tr>
                    }
                </tbody>
            </table>
            <div>
                <Pagination limit={limit} total={count} paginate={paginate} />
            </div>
            
        </div>
    )
}

export default Transactions;