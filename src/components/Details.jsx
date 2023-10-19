import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const Details = () => {
const loadedUsers =useLoaderData();
const { _id } = useParams();
const [cardDetails, setCardDetails] = useState(loadedUsers);
   

    useEffect(() => {
        fetch(`/users/${_id}`)
          .then((response) => response.json())
          .then((data) => setCardDetails(data));
      }, [_id]);
      
      const navigate = useNavigate();
      const handleGoBack = () =>{
        navigate(-1);
     }

     const handlebtn = event =>{
        event.preventDefault();
        fetch(`/users/${_id}`,{
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify(cardDetails)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Done!',
                text: 'Information added successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
            
          });
        }

    return (
        <div>
<div className="flex justify-around items-center">


<div className="lg:flex justify-around items-center my-[30px]" >
        <div>
            <img className="h-[700px] w-[500px]" style={{ border: "2px solid black" }} src={cardDetails.image}></img>
        </div>
        <div className="lg:h-[650px] lg:w-[700px] sm:h-[800px] sm:w-[700px] ml-[100px]">
            <p className=" text-[45px] font-bold my-[10px] text-black" data-aos="fade-up">{cardDetails.name}</p>
            <p className=" text-[45px] font-bold my-[10px]" style={{color:'#87CEEB'}} data-aos="fade-up">{cardDetails.brand}</p>
            <div className="divider my-[10px]" ></div> 
              <p className=" text-[35px] font-bold my-[10px]">{cardDetails.types}</p>
              <p className=" text-[20px]  my-[10px]">{cardDetails.description}</p>
              <p className="text-black text-[23px] font-bold my-[10px]">Price - {cardDetails.price}</p>
            <div className="lg:flex justify-between items-center mt-[100px] mr-[300px]">
            <Link to={'/mycart'}><button  onClick={handlebtn} className="btn  bg-[#87CEEB] ">Add to Cart</button></Link>
            <button onClick={handleGoBack} className="btn" style={{ border: "3px solid black" }}>Go Back</button>
            </div>
        </div>
        </div>

      </div>
        </div>
    );
};

export default Details;