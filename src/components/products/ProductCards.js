import React from 'react';


function ProductCards({ product, addToCart}) {

    

    return (
        <div className='col-xs-12 cold-sm-6 col-md-6 col-lg-6 my-2'>
            <div className='card'>

                <div className='card-title font-weight-bolder fredoka-cursive m-auto text-center'>{product.name}</div>
                {/* <img className='card-img-top img-fluid' style={{ height: '180px' }} src={product.image} alt={product.name} /> */}

                <div className='card-body'>
                    <div>
                        <p className='card-text text-right font-weight-bolder'>&#8369; {product.price}</p>
                    </div>
                    {
                        product.availability ?
                            <div className='text-center'>
                                <div className='form-row'>
                                    <div className='col'>
                                        <button
                                            className='btn btn-success text-white form-control'
                                            onClick={()=> {
                                                addToCart(product.id)
                                            }}
                                            >Add</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <p className='text-danger text-center'>Not available</p>
                    }
                </div>
            </div>
        </div>

    )


}

export default ProductCards;


