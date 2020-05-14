import React, {useState,useEffect} from 'react';
import {getUser} from './../../api/apiCall';

const UserCard = (props) =>{
    let id = props.match.params.id;

    const [user,setUser] = useState([]);

    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchUser = () =>{
        getUser(id).then(response=>{
            let data = response.data[0];

            setUser(data);
        });
    }

    return (
        <div className="row">
            <div className="col-sm-6 col-md-4">
                <img
                    src="http://placehold.it/380x500"
                    alt={user.first_name}
                    className="img-rounded img-fluid img-responsive mx-auto mb-2"
                    style={{
                        height : '300px'
                    }}/>
            </div>
            <div className="col-sm-6 col-md-8">
                <h4>{`${user.first_name} ${user.last_name}`}</h4>
                <small className='text-muted'>
                    <cite title={user.address || 'Not defined'}>{user.address || 'Not defined'}
                        <i className="fa fa-map-marker mx-1"></i>
                    </cite>
                </small>
                <p>
                    <i className="fa fa-envelope mx-1"></i>{user.email}
                    <br/>
                    <i className="fa fa-phone mx-1"></i>{user.phone_number}
                </p>
            </div>
        </div>
    )
}

export default UserCard;