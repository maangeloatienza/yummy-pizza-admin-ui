import React from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


const BannerItem = ({banner,onToggle,checked}) => {

    return (
        <tr >
            <td className='align-middle display-4'>
                <img src={banner.image} alt={banner.name} className='img-fluid rounded' style={{
                    height : '200px'
                }}/>
            </td>
            {/* <td className='align-middle display-4'>{banner.name}</td> */}
            <td className='align-middle display-4'>
                <BootstrapSwitchButton
                    checked={checked}
                    onlabel='ON'
                    offlabel='OFF'
                    onChange={(checked) => {
                        onToggle(banner.id, checked);
                    }}
                />
            </td>
        </tr>
    )
}

export default BannerItem;