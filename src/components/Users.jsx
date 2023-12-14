
import {  useLoaderData } from 'react-router-dom';
import Store from './Store';
import Adver from './Adver';

const Users = () => {
    
    const loadedUsers =useLoaderData();
   
  // const {brand} = useParams();
    //const filter = loadedUsers.filter(p => p.brand === brand );
   

    return (
        <div>
            <Adver></Adver>
            {/* {
                filter.length === 0 ? (<p className="text-black text-[50px] font-bold text-center">Stock Out All Products</p>) : (<p className="text-black text-[50px] font-bold text-center">Available Products</p>)
            } */}

            <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-[80px] mb-[200px] ">
                {
                    loadedUsers.map(p => <Store key={p._id} p={p}></Store>)
                    
                }
            </div>
        </div>
    );
};

export default Users;