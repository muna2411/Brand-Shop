import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Adver = () => {
    return (
        <div>
         
        <div className='my-[50px] lg:w-[700px] sm:w-[630px] h-[500px] lg:mx-auto sm:mx-[0px]'>
          
    <Swiper
     spaceBetween={30}
     centeredSlides={true}
     autoplay={{
       delay: 2200,
       disableOnInteraction: false,
     }}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Autoplay, Pagination, Navigation]}
     className="mySwiper "
    >
      <SwiperSlide>
      <img className="w-[700px] h-[500px]" src="https://i.ibb.co/MGYXFJK/147.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[700px] h-[500px]" src="https://i.ibb.co/WHZ7PYP/148.jpg"  ></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[700px] h-[500px]" src="https://i.ibb.co/n1bkPsQ/146.jpg"></img>
      </SwiperSlide>
    </Swiper>
        </div>
        </div>
    );
};

export default Adver;








// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const Mycarstore = ({user,bookings , setBookings}) => {
//     const  {_id,name,brand,price,image} = user;

//     const handleDelete = _id => {
//         console.log(_id);
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then((result) => {
//             if (result.isConfirmed) {

//                console.log('confirm')
//                 fetch(`https://brandshop-server-miwq8mlu8-munas-projects.vercel.app/cart/${_id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             Swal.fire(
//                                 'Deleted!',
//                                 'Your product has been deleted.',
//                                 'success'
//                             )
//                             const remaining = bookings.filter(p => p._id !==_id)
//                             setBookings(remaining)
                          
//                         }
//                     })

//             }
//         })
//     }

//     return (
//         <div >
//         <div >
//             <div className="card w-[450px] bg-base-100 shadow-xl my-[100px] lg:ml-[50px] sm:ml-[100px] hero  ">
//                <figure><img className="w-[450px] h-[650px]" src={image} alt="Shoes" /></figure>
//                 <div className="card-body mb-[-450px] hero-overlay bg-opacity-60 h-[200px] text-white">
//                         <i className="card-title">Name : {name}</i>
//                         <i className="card-title">Brand : {brand}</i>
//                         <div className="flex justify-around items-center">
                        
//                         <p className="text-[#87CEEB] text-[18px]">Price :{price}</p>
                        
//                         </div>
                   
//                 </div>
//                 <div>
//                     <Link >
//                         <button  onClick={() => handleDelete(_id)} className="btn ml-[350px] mb-[550px] w-[50px] h-[50px] text-[18px]" style={{ borderRadius: "50%" , border: "1px solid black"}}>X</button>
//                     </Link>
//                     </div>
//             </div>
//         </div>
//     </div>
//     );
// };

//  export default Mycarstore;