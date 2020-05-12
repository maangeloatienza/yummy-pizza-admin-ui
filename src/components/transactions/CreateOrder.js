import React, {useState} from 'react';

const CreateOrder = () =>{


    return (
        <div className='col-8'>
            
            <div className="form-row mb-2">
                <div className="col">            
                    <input type="text" className='form-control' placeholder='First name' required autoFocus />
                </div>
                <div className="col">                  
                    <input type="text" className='form-control' placeholder='Last name' required autoFocus />
                </div>
            </div>

            <div className="form-row mb-2">
                <div className="col">
                    <input type="text" className='form-control' placeholder='Contact number' required autoFocus />
                </div>
            </div>

            <div className="form-row mb-3">
                <div className="col">
                    <input type="text" className='form-control' placeholder='Delivery address' required autoFocus />
                </div>
            </div>
            
           
        </div>
    )
}

export default CreateOrder;