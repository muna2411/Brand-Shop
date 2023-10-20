import { Link, NavLink } from "react-router-dom";
import './Nav.css';
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import {  GoogleAuthProvider,  signInWithPopup} from "firebase/auth";
import auth from "../firebase.init";
const Navbar = () => {
    const provider = new GoogleAuthProvider();
     const handleButton = () =>{
          signInWithPopup(auth,provider)
          .then(result => {
               console.log(result.user);
              
          })
          .catch(error => {
              console.log('error',error.message)
          })
      }

     const {user, logOut} =useContext(AuthContext);
   const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
   }
    return (
        <div>
        <div className="grid  justify-between items-center m-[20px] lg:grid-cols-3 sm:grid-cols-1">
            <div className="flex  items-center justify-center">
            <img className="w-[90px] h-[90px] "style={{  border: "3px solid black" }} src="https://i.ibb.co/bvrxrQk/10.jpg"></img>
            <p className="text-black text-[60px] font-bold mx-[5px]">Wish <span className="text-[20px] text-[#808080]">The Fashion House..</span></p>
            </div>
           
            <div className="text-black text-[20px] gap-[10px] font-semibold ml-[100px]">
                 <nav>
                 <NavLink exact activeClassName="active-link " className ="mr-[20px] " to="/">Home</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/addproduct">Add_Product</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/mycart">My_Cart</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/login">Login</NavLink>
                 <NavLink activeClassName="active-link" className ="mr-[20px]" to="/register">Register</NavLink>
                 </nav>
            </div>
            <div>
            <div className="flex">

{
 user && <div className="flex justify-center items-center mx-[10px] ml-[200px] ">
            <div> <img className="w-[60px] h-[60px] mx-[10px]"style={{ borderRadius: "50%"}} src={user.photoURL}></img> </div>
            <div> <p className="text-[18px] text-black">{user.displayName}</p></div>
          </div>
 }

{
       user ? 
       <button onClick={handleSignOut} className="btn " style={{ border: "3px solid black" }}>Sign Out</button> :
       <Link to="/login"><button onClick={handleButton} className="btn ml-[350px]" style={{ border: "3px solid black" }}>Sign in with Google</button></Link>
        
}
     
</div>



            
            </div>
        </div>
        <div className="divider text-[20px] text-black"></div>
        </div>
    );
};

export default Navbar;