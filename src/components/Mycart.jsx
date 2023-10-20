import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Mycarstore from "./Mycarstore";


const Mycart = () => {

    const loadedUsers = useLoaderData();
    const [users,setUsers] = useState(loadedUsers);
    return (
        <div>
       
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    users.map(user => <Mycarstore key={user._id} user={user} users={users} setUsers={setUsers}></Mycarstore>)
                }
            </div>
        </div>
    );
};

export default Mycart;