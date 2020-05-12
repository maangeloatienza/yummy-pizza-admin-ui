import React, {useState} from 'react';
import {login} from './../../api/apiCall';
import {Toast} from './../../utils/Toast';
import {setUserSession} from './../../utils/Commons';

const Login = (props)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
   const onSubmit = (e)=>{
       e.preventDefault();
       
        login({
            username,
            password
        }).then(response => {
            
            
            Toast(response);

            if (response.success) {
                setUserSession(response.token, response.data);
                props.authUser();
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }else {
                clearInput();
            }
        })
    }

    const clearInput = () => {
        setUsername('');
        setPassword('');
    }
    
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6  mt-5 pt-5">
                    <form onSubmit={onSubmit}>
                        <h1 className='text-center text-danger font-weight-bolder'> Pizza Admin </h1>

                        <div className="form-label-group mb-2">

                            <input
                                type="text"
                                className='form-control'
                                value = {username}
                                placeholder='Username'
                                onChange={(e)=> setUsername(e.target.value)}
                                required />

                        </div>

                        <div className="form-label-group mb-2">

                            <input
                                type="password"
                                className='form-control'
                                value = {password}
                                placeholder='Password'
                                onChange={(e)=> setPassword(e.target.value)}
                                required />

                        </div>

                        <button className="mt-2 btn btn-lg btn-primary btn-block" >Sign in</button>
                        <p className="mt-5 mb-3 text-muted text-center">&copy; 2020</p>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;