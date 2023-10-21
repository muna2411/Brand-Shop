
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Card = ({cards}) => {
    const { _id,brand,image_url } = cards;

    // const handleCart = e=>{
    //     e.preventDefault();
    //     const brands =brand;

    //     const cart = {brands};
    //     console.log(cart);
    //     fetch('https://brandshop-server-4yw2i68k9-munas-projects.vercel.app/users' ,{
    //         method: 'POST',
    //           headers:{
    //             'content-type' : 'application/json'
    //           },
    //           body:JSON.stringify(cart)
    //         })
    //         .then(res => res.json())
    //         .then(data =>{
    //           console.log(data)
             
    //         })
           
    //     }
    

    return (
        <div>
            
            <div className="carousel rounded-box lg:ml-[0px] sm:ml-[100px]">
                <div className="carousel-item">
            <Link to={`/users`}  >
                   <button className='hero min-h-screen '> 
                    <img className='w-[460px] h-[700px]' src={image_url}  />
                    <div className='mt-[-80px] hero-overlay bg-opacity-60 h-[80px]'>
                    <i className='text-[50px] text-white text-center'>{brand}</i>
                    </div>
                    </button>
            </Link>
                </div> 
           </div>

        </div>
    );
};

export default Card;



