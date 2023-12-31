import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Card = ({cards}) => {
    const { brand,image_url } = cards;

    return (
        <div>
            
            <div className=" rounded-box lg:ml-[0px] sm:ml-[100px]">
                <div className='m-[10px]'>
            <Link to={`/users`}  >
                   <button  className='hero  '> 
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

