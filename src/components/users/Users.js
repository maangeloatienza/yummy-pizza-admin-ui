import React, {useState,useEffect} from 'react';
import {getUsers} from './../../api/apiCall';
import Pagination from './../pagination/pagination';
import UserItem from './UserItem';

const Users = () =>{
    const [users,setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [sortItem, setSortItem] = useState('created');
    const [sortDesc, setSortDesc] = useState('DESC');

    let sortToggle = false;
    
    useEffect(()=>{
        fetchUsers();
    },[]);

    const fetchUsers = () => {
        getUsers(`limit=${limit}&page=${currentPage}&sort_id=${sortItem}&sort_desc=${sortDesc}`).then(response=> {
            let data =response.data;

            setCount(response.count);
            setLimit(response.limit);
            setCurrentPage(response.page);
            setUsers(data);
        });
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const sortPage = (sortItem, sortToggle) => {
        setSortItem(sortItem);
        setSortDesc(sortToggle ? 'ASC' : 'DESC');
    }

    return (
        <div className='container'>
            {/* <div className='row'>
                <CreateOrder/>
            </div> */}
            <h2 className='font-weight-bolder text-left'>View Users</h2>

           <div className='table-responsive'>
                <table
                    className='table table-sm table-striped table-dark'
                    data-page-size={limit}>
                    <thead>
                        <tr>
                            <td className='text-right' colSpan={5}>
                                <p className='text-right m-2'>Total: <span className='font-weight-bolder'>{count}</span></p>
                            </td>
                        </tr>
                        <tr >
                            <td className='' onClick={() => sortPage('username', sortToggle = !sortToggle)}>Username</td>
                            <td className='' onClick={() => sortPage('first_name', sortToggle = !sortToggle)}>First name</td>
                            <td className='' onClick={() => sortPage('last_name', sortToggle = !sortToggle)}>Last name</td>
                            <td className='' onClick={() => sortPage('created', sortToggle = !sortToggle)}>Email address</td>
                            <td className='' onClick={() => sortPage('total', sortToggle = !sortToggle)}>Phone number</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users ? users.map(item => {
                                return <UserItem user={item} key={item.id} />
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

export default Users;