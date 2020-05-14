import React, {useState,useEffect} from 'react';
import {getProducts} from '../../api/apiCall';
import ProductCards from '../products/ProductCards';

const CreateTransaction = () =>{
    const [customer,setCustomer]= useState({
        code: '',
        first_name : '',
        last_name : '',
        contact_number : '',
        delivery : '',
        total : ''
    });
    const [loader,setLoader] = useState(false);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        // fetchProducts();
    },[]);

    // const fetchProducts = () =>{
    //     getProducts(`limit=999`).then(response=>{
    //         let data = response.data;
    //         setProducts(products);
    //     });
    // }


    return (
        <div className=''>
            <div className='col-md-8 col-lg-8'>
                <div className="form-row mb-2">
                    <div className="col">            
                        <input type="text" className='form-control' placeholder='First name' required autoFocus />
                    </div>
                    <div className="col">                  
                        <input type="text" className='form-control' placeholder='Last name' required />
                    </div>
                </div>

                <div className="form-row mb-2">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Contact number' required />
                    </div>
                </div>

                <div className="form-row mb-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Delivery address' required />
                    </div>
                </div>
            </div>
            {/* <div className='col-sm-12 col-md-4 col-lg-4'>
                {
                    products.map(item=>{
                        return <ProductCards product={item} key={item.id}/>
                    })
                }
            </div> */}
        </div>
    )
}

export default CreateTransaction;