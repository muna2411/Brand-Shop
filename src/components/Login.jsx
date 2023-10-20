

import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { FaEye ,FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  
  const [success,setSuccess]=useState(" ");
  const [loginError, setLoginError] = useState('');

    const [showPass,setShowPass] = useState(false);
    const {signIn} = useContext(AuthContext);
    //console.log({signIn})
    
        const handleSignIn = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const pass = e.target.password.value;

            signIn(email , pass)
            .then(result =>{
                console.log(result.user);
                setSuccess("successful");
            })
            .catch(error =>{
                console.error("Error signing in:", error.code, error.message);
                setLoginError('Email or password is incorrect');
            })
    
        }
        return (
            <div className="lg:flex justify-between items-center">
                <div>
                <img className="w-[700px] h-[1000px]" src="https://i.ibb.co/SndppRW/121.jpg"></img>
                </div>
                <div className="lg:w-[960px] h-[1000px] sm:w-[425px]  justify-between items-center" >
                <div className="divider lg:w-[600px] sm:w-[450px] lg:mx-[180px] sm:mx-[100px] mt-[100px]">  <h2 className="text-black text-[60px] font-bold ">Wish</h2> </div>
                    <p className="text-center mt-[100px] text-[30px] font-bold text-black">Sign In</p>
                    <form onSubmit={handleSignIn} className="lg:w-[500px] lg:h-[600px] lg:mx-[250px] sm:w-[400px]">
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label">
                  <span className="label-text text-[18px]">Email</span>
                </label>
                <input 
                type="email" 
                placeholder="email" 
                name="email" 
                className="input input-bordered" required />
              </div>
    
              <div className="form-control sm:ml-[100px] lg:ml-[0px]">
                <label className="label">
                  <span className="label-text text-[18px]">Password</span>
                </label>

              <div className="flex">
              <input  type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-[500px]" required />
                <span className=" top-[20px] ml-[-30px] mt-[15px]" onClick={() => setShowPass (!showPass)}>
                  {
                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                  }
                </span>
              </div>
              </div>

              <div className="form-control mt-6 lg:w-[500px] h-[80px] sm:ml-[100px] lg:ml-[0px] sm:w-[310px]">
                <button className="btn bg-black text-white ">Login</button>
              </div>
              
              {
                success && <p className="text-green-700 text-[18px]">{success}</p>
              }
              {
                loginError && <p className="text-red-700 text-[18px]">{loginError}</p>
              }
              <div className="divider sm:ml-[100px] lg:ml-[0px]">OR</div>
              <p className="text-[18px] sm:ml-[100px] lg:ml-[0px]" >Create an Account   <Link className="text-[blue]  underline underline-offset-4 ..." to="/register">Register</Link></p>
            </form>
                </div>
                
            </div>
        );
};
export default Login;