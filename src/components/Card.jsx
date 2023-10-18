import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Card = ({cards}) => {
    const { id,brand_name,image_url } = cards;
    return (
        <div>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                   <button className='hero min-h-screen'> 
                    <img className='w-[460px] h-[700px]' src={image_url}  />
                    <div className='mt-[-80px] hero-overlay bg-opacity-60 h-[80px]'>
                    <i className='text-[50px] text-white text-center'>{brand_name}</i>
                    </div>
                    </button>
                </div> 
           </div>

        </div>
    );
};

export default Card;