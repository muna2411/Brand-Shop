import { Link, NavLink } from "react-router-dom";
import './Nav.css';
const Navbar = () => {
    return (
        <div>
        <div className="flex justify-between items-center m-[20px]">
            <div className="flex  items-center justify-center">
            <img className="w-[90px] h-[90px] "style={{  border: "3px solid black" }} src="https://i.ibb.co/bvrxrQk/10.jpg"></img>
            <p className="text-black text-[60px] font-bold mx-[5px]">Wish <span className="text-[20px] text-[#808080]">The Fashion House..</span></p>
            </div>
           
            <div className="text-black text-[20px] gap-[10px] font-semibold">
                 <nav>
                 <NavLink exact activeClassName="active-link " className ="mr-[20px] " to="/">Home</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/addproduct">Add_Product</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/mycart">My_Cart</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/login">Login</NavLink>
                 </nav>
            </div>
            <div>
            <Link to="/login"><button  className="btn" style={{ border: "3px solid black" }}>Sign in with Google</button></Link>
            </div>
        </div>
        <div className="divider text-[20px] text-black"></div>
        </div>
    );
};

export default Navbar;