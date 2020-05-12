import React from 'react';


const ProductItem = ({ product }) => {

    const dateConvert = (date) => {
        let dateTime = new Date(date.toString());

        return dateTime.toDateString();
    }
    console.log('PRODUCT', product)

    return (
        <tr className='d-flex'>
            {/* <td className='col-3 '><img src={product.image} alt={product.name} style={{width: '50px',height: '50px'}}/></td> */}
            <td className='col-3 '>{product.name}</td>
            <td className='col-3 '></td>
            <td className='col-3 '>{product.price}</td>
            <td className='col-3 '>{product.availability? 'Available' : 'Not Available'}</td>
        </tr>
    )
}

export default ProductItem;