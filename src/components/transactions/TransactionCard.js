import React, {useState,useEffect} from 'react';
import {getTransaction} from './../../api/apiCall';

const TransactionCard = (props) =>{
    const [transaction, setTransaction] = useState([]);
    const id = props.match.params.id;
    useEffect(()=>{
        fecthTransaction();
    },[]);

    const fecthTransaction = () =>{
        getTransaction(id).then(response=>{
            let data = response.data;

            setTransaction(data);
        })
    }

    return (
        <div className='col-12' id='previewTx'>
 
            <h4 className='mb-1 text-center'>
                <span className="">Order Details</span>
            </h4>
            <div className='table-responsive'>
                <table className='table table-striped table-dark text-white text-center mx-auto'>
                    <thead>
                        <tr className=''>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transaction ? transaction.map((item, index) => {
                                return <tr key={index}>
                                    <td>
                                        <img
                                            src={item.image}
                                            className='img-responsive'
                                            style={{ height: '85px', width: '85px' }}
                                            alt={item.name} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>&#8369;{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            })
                                : <tr className='text-danger'>No Preview!</tr>
                        }
                    </tbody>
                </table>
            </div>
       
        </div>
    )
}

export default TransactionCard;