import React, {useState,useEffect} from 'react';
import {getBanners,updateBanner} from './../../api/apiCall';
import BannerItem from './BannerItem';
import { Toast } from './../../utils/Toast';


const Banners = () =>{
    const [banner,setBanner] = useState([]);
    const [checked, setChecked] = useState(null);
    useEffect(()=>{
        fetchBanners();
    },[checked]);

    const fetchBanners = () => {
        getBanners().then(response => {
            let data = response.data;

            setBanner(data);
        })
    }

    const onToggle = (id,body) => {
        console.log('CHECKED',body)
        updateBanner(id,{
            showcase : body
        }).then(response=> {
            setChecked(banner.showcase ? true : false);
            Toast(response);
        });
    }

    return (
        <div className='row'>
            <h2 className='font-weight-bolder'>Banner Settings</h2>
            <div className='table-responsive'>
                <table className='table table-lg table-striped table-dark'>
                    <thead>
                        <tr>
                            <td>Image</td>
                            {/* <td>Name</td> */}
                            <td>Showcase</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banner? banner.map(item => {
                                return <BannerItem banner={item} onToggle={onToggle} key={item.id} checked={item.showcase? true:false}/>
                            })
                            :
                            <tr>
                                <td className='text-danger'>No preview!</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Banners;