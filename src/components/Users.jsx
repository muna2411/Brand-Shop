import { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import Store from './Store';
import Adver from './Adver';

const Users = () => {
    
    const loadedUsers =useLoaderData();
    const [users,setUsers] = useState(loadedUsers);


  // useEffect(() => {
  //   fetch(`/users?brand=${brand}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, [brand]);

  
    return (
        <div>
            <Adver></Adver>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Store key={user._id} user={user} users={users} setUsers={setUsers}></Store>)
                }
            </div>
        </div>
    );
};

export default Users;