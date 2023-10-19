
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';


const Card = ({cards}) => {
    const { _id,brand_name,image_url } = cards;
    // fetch(`http://localhost:5000/users/${_id}`)
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data)
    // })


    // const handleDelete = _id =>{
    //     console.log('delete' , _id);
    //     fetch(`http://localhost:5000/users/${_id}`,{
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deletedCount>0){
    //             alert('deleted successfully');
    //             const remaining = users.filter(user => user._id !== _id)
    //             SetUsers(remaining)
    //         }
    //     })
    //   }

    return (
        <div>
            
            <div className="carousel rounded-box">
                <div className="carousel-item">
            <Link to={'/users'}>
                   <button className='hero min-h-screen '> 
                    <img className='w-[460px] h-[700px]' src={image_url}  />
                    <div className='mt-[-80px] hero-overlay bg-opacity-60 h-[80px]'>
                    <i className='text-[50px] text-white text-center'>{brand_name}</i>
                    </div>
                    </button>
            </Link>
                </div> 
           </div>

        </div>
    );
};

export default Card;



