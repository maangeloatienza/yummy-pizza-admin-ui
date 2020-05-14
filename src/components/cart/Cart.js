import React from 'react';

const Checkout = ({cart,onUpdate,onCheckout}) => {


    const handleQuantity = (event, value) => {
        event.preventDefault();

        onUpdate(event.currentTarget.id, parseInt(event.currentTarget.value) + value);

    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    

                    <h6 className="my-0">{cart.name}</h6>

                    <div className='form-row'>
                        <div className='col-2 px-0'>
                            <button
                                className='btn btn-xs btn-danger form-control mx-0'
                                id={cart.id}
                                value={cart.quantity}
                                onClick={(event) => {
                                    handleQuantity(event, -1);
                                }}>
                                <i className="fa fa-minus"></i>
                            </button>


                        </div>

                        <div className='col-2 px-0'>
                            <input type='number' value={cart.quantity} className='form-control  text-center' disabled={true} />
                        </div>

                        <div className='col-2 px-0'>
                            <button
                                className='btn btn-xs btn-success form-control mx-0 width-50'
                                id={cart.id}
                                value={cart.quantity}
                                onClick={(event) => {
                                    handleQuantity(event, 1);
                                }}>
                                <i className="fa fa-plus"></i>
                            </button>

                        </div>
                        <div className='col-6 text-right'>
                            <strong className="text-muted">&#8369; {cart.subtotal}</strong>

                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Checkout;