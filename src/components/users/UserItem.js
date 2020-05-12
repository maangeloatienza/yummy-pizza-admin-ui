import React from 'react'
import {Link} from 'react-router-dom';

const UserItem = ({user}) => {


    return (
        <tr >
            <td className=''>
                <Link to={`/users/${user.id}`}>{user.username}</Link>
            </td>
            <td className=''>{user.first_name}</td>
            <td className=''>{user.last_name}</td>
            <td className=''>{user.email}</td>
            <td className=''>{user.phone_number}</td>
        </tr>
    )
}

export default UserItem;