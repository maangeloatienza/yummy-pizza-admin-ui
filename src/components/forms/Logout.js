import React, {useEffect} from 'react';
import { Toast } from './../../utils/Toast';
import { withRouter } from 'react-router-dom';


import { logout } from './../../api/apiCall';
import { removeUserSession } from './../../utils/Commons';



const Logout = () =>{

    useEffect(()=>{
        onLogout();
    },[]);

    const onLogout = () => {

        logout().then(response => {
            Toast(response);

            if (response.success) {
                removeUserSession();
                setTimeout(() => {
                    window.location.href = '/';

                }, 1000);
            }
        })

    }

    return (
        <>
        </>
    )

}

export default withRouter(Logout);