import { Link } from "react-router-dom";

const Store = ({user}) => {
    const  {_id,name,brand,types,price,description,ratings,image} = user;
    return (
    <div >
        <div >
            <div className="card w-[450px] bg-base-100 shadow-xl my-[100px] lg:ml-[50px] sm:ml-[100px]">
               <figure><img className="w-[450px] h-[650px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                        <h2 className="card-title">Name : {name}</h2>
                        <h2 className="card-title">Brand : {brand}</h2>
                        <div className="flex justify-around items-center">
                        <p> Types :{types}</p>
                        <p>Price :{price}</p>
                        <p>Rating :{ratings}</p>
                        </div>
                    <div className="card-actions flex justify-around items-center">
                    <Link to={`/users/${_id}`}>
                        <button className="btn ">Details</button>
                    </Link>
                    <Link to={`/update/${_id}`}>
                        <button className="btn ">Update</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Store;

