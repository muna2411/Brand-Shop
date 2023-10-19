import { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import Store from './Store';
import Adver from './Adver';

const Users = () => {
    
    const loadedUsers =useLoaderData();
    const [users,SetUsers] = useState(loadedUsers)

    // const handleDelete = _id =>{
    //     console.log('delete' , _id);
    //     fetch(`http://localhost:5000/users/${_id}`,{
    //         method: 'POST'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deletedCount>0){
    //             alert('deleted successfully');
    //             const remaining = users.filter(user => user._id !== _id)
    //             SetUsers(remaining)
    //         }
    //     })
    //  }
  
    return (
        <div>
            <Adver></Adver>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Store key={user._id} user={user} ></Store>)
                }
            </div>
        </div>
    );
};

export default Users;