import React, { useState } from 'react';
import {createProduct} from './../../api/apiCall';
import {Toast} from './../../utils/Toast';

const CreateProduct = ({fetchProducts}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [pictures,setPictures] = useState([]);
    const [save, setSave] = useState(false);


    const fileChangedHandler = (event)=>{
       setPictures({
           file_name: event.target.value,
           file: event.target.files[0]
       })
    }

    const onSave = () => {

        const formData = new FormData()
        pictures&&formData.append(
            'file',
            pictures.file
        )
        formData.append(
            'name',
            name
        )
        formData.append(
            'price',
            price
        )
        formData.append(
            'description',
            description
        )

        loader(true);

        createProduct(formData).then(response=>{
            let data = response.data;

            Toast(response);
            if(response.success) {
                loader(false);
                reset();
            }
        })
        
    }

    const loader = (save) => {
        setSave(save)
    }

    const reset = () => {
        setName('');
        setPrice('');
        setDescription('');
        setPictures('');
    }

    return (
        // <div className='col-12 mb-5'>
        //     <h2 className='font-weight-bolder text-left'>Create Product</h2>

            <div className='row flex'>
                <h2 className='font-weight-bolder text-left'>Create Product</h2>

                <div className='col-12'>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Product Name'
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                required
                                autoFocus />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className='form-control'
                                placeholder='Price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                />
                        </div>
                    </div>
                    <div className="form-row mb-2">
                        <div className="col">
                            <textarea  
                                className='form-control'
                                placeholder='Description'
                                rows="4"
                                style={{
                                    resize: 'none'
                                }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                />
                        </div>
                
                    </div>
                    <div className="form-row mb-2">
                        <div className='col'>
                            <input
                                type="file"
                                accept="image/gif, image/jpeg, image/png"
                                onChange={fileChangedHandler} />
                        </div>

                    </div>

                    <h3 className='text-center text-danger'>{save? 'Saving . . . ' : ''}</h3>

                    <button className="mt-2 btn btn-md btn-primary btn-block" onClick={onSave} >Save</button>
                </div>
                
            </div>
        // </div>
    )
}

export default CreateProduct;