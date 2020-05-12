import React from 'react';
import {Link} from 'react-router-dom';

const TransactionItem = ({transaction}) => {

    const dateConvert = (date) => {
        let dateTime = new Date(date.toString());

        return dateTime.toDateString();
    }

    return (
        <tr className='d-flex'>
            <td className='col-3'>
                <Link to={`/transactions/${transaction.id}`}>{transaction.code}</Link>
            </td>
            <td className='col-3'>{`${transaction.first_name} ${transaction.last_name}`}</td>
            <td className='col-3'>{dateConvert(transaction.created)}</td>
            <td className='col-1'>{transaction.total}</td>
            <td className='col-2'>{}</td>
        </tr>
    )
}

export default TransactionItem;