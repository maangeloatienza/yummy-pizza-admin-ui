import React, { useState, useEffect } from 'react';
import { getProducts, getUserCart, addCart, updateCart, checkout} from '../../api/apiCall';
import { generate } from './../../utils/Generator';
import ProductCards from '../products/ProductCards';
import Cart from './../cart/Cart';

import { Toast } from './../../utils/Toast';

const CreateTransaction = () =>{
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [contact_number,setContact] = useState('');
    const [delivery_address,setAddress] = useState('');


    const [code,setCode] = useState('');
    const [search,setSearch] = useState('');
    const [loader,setLoader] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
    const [total,setTotal] = useState(0);
    
    let charge = 50;
    let cartBody = {};
    let checkoutBody = {};

    
    useEffect(()=>{
        localStorage.getItem('code') ? localStorage.getItem('code') : localStorage.setItem('code',generate());
        setCode(code ? code : localStorage.getItem('code'))
        getCartItems();
    },[]);

    const fetchProducts = (search) =>{
        getProducts(`limit=999&search=${search}`).then(response=>{
            let data = response.data;
            setProducts(data);
        });
    }

    const getCartItems = () => {
        
        let params = code ? code : localStorage.getItem('code') ;

        getUserCart(`guest=${params}`).then(response=> {
            let data = response.data;

            setCount(response.count);
            setTotal(response.total);
            setCart(data);
        });
    }

    const addToCart = (id) => {
       
        let params = code ? code : localStorage.getItem('code');

        cartBody.product_id = id;
        cartBody.quantity = 1;
        cartBody.guest_user = params;
        addCart(`user=${code}`,cartBody).then(response => {
            setSearch('');
            fetchProducts();
            getCartItems();
            Toast(response);
        });
    }

    const onUpdate = (cartId, quantity) => {
        updateCart(`${cartId}`, {
            quantity: quantity
        }).then(response => {
            let data = response;

            if (data.success) {
                getCartItems();
            }
        })
    }

    const onCheckout = () => {
        checkoutBody.user_id = code;
        checkoutBody.first_name = first_name;
        checkoutBody.last_name = last_name;
        checkoutBody.contact_number = contact_number;
        checkoutBody.delivery_address = delivery_address;
        checkoutBody.delivery_cost = charge;
        console.log(checkoutBody);
        checkout(checkoutBody).then(response=> {
            Toast(response);

            

            if(response.success) {

                setInterval(() => {
                    window.location.href = '/transaction/create'
                    localStorage.removeItem('code');
                }, 1000);
            };
        })
    }

    const generateCode = () => {
        setCode(localStorage.getItem('code'));
    }

    return (
        <div className='container'>
            <h2 className='font-weight-bolder'>Create Order</h2>
            <div className='row'>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                    <div className="form-row mb-2">
                        <div className="col">
                            <p
                                className='form-control bg-info text-white text-center' 
                                onClick={(e) => {
                                    generateCode();
                                }}>Generated Code</p>
                        </div>
                        <div className="col">
                            <input type="text" className='form-control' value={code} placeholder='Code' disabled={true}/>
                        </div>
                    </div>

                    <div className="form-row mb-2">
                        <div className="col">            
                            <input 
                                type="text" 
                                className='form-control'
                                value={first_name}
                                onChange={
                                    (e)=>{
                                        setFirstName(e.target.value)
                               }
                            }placeholder='First name' required />
                        </div>
                        <div className="col">                  
                            <input 
                                type="text" 
                                className='form-control'
                                value={last_name}
                                onChange={
                                    (e)=>{
                                        setLastName(e.target.value)
                               }
                            }placeholder='Last name' required />
                        </div>
                    </div>

                    <div className="form-row mb-2">
                        <div className="col">
                            <input 
                                type="text" 
                                className='form-control'
                                value={contact_number}
                                onChange={
                                    (e)=>{
                                        setContact(e.target.value)
                               }
                            }placeholder='Contact number' required />
                        </div>
                    </div>

                    <div className="form-row mb-3">
                        <div className="col">
                            <input 
                                type="text" 
                                className='form-control'
                                value={delivery_address}
                                onChange={
                                    (e)=>{
                                        setAddress(e.target.value)
                               }
                            }placeholder='Delivery address' required />
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col">
                            <input
                                type="text"
                                className='form-control'
                                value={search}
                                placeholder='Search'
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    fetchProducts(e.target.value);
                                }}
                                required />
                        </div>
                        <div className="col">
                            <button
                                className='form-control btn btn-primary'
                                onClick={()=>{
                                    fetchProducts();
                                }}
                                >Search</button>
                        </div>
                    </div>

                    <div className="form-row mb-3">
                        
                            {
                                products ? products.map(item=> {
                                    return <ProductCards
                                        addToCart={addToCart}
                                        product={item}
                                        key={item.id}/>
                                }) : ''
                            }
                        
                    </div>

                </div>
                <div className='col-sm-12 col-md-4 col-lg-4'>
                    <h4 className="d-flex justify-content-between align-items-center mb-1">
                        <span className="font-weight-bolder">Items</span>
                        <span className="badge badge-secondary badge-pill">{count || 0}</span>
                    </h4>
                    {
                        cart ?
                        <button
                            className='btn btn-xs btn-success form-control mx-0'
                            onClick={(event) => {
                                event.preventDefault();
                                onCheckout();
                            }}>PROCESS
                        </button> :
                        <button
                            className='btn btn-xs btn-danger form-control mx-0'
                            onClick={(event) => {
                                event.preventDefault();
                                onCheckout();
                            }}
                            disabled={true}
                            >PROCESS
                        </button>
                    }
                    <ul className="list-group mb-2 text-left">
                        {
                            cart ? cart.map(item => {
                                return <Cart
                                            cart={item}
                                            key={item.id}
                                            onUpdate={onUpdate}
                                            onCheckout={onCheckout}/>
                            })
                            :
                            <li className="list-group-item d-flex justify-content-between lh-condensed">Empty Cart</li>
                        }

                        {
                            cart ? <li className="list-group-item d-flex justify-content-between">
                                <span>Delivery charge </span>
                                <strong className="text-muted">&#8369; {charge}</strong>
                            </li> : ''
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>&#8369; {total + charge || 0.0}</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total USD </span>
                            <strong>&#36; {cart ? ((total + charge) / 50.61).toFixed(2) : 0}</strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total EURO</span>
                            <strong>&euro; {cart ? ((total + charge) / 55.66).toFixed(2) : 0}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CreateTransaction;