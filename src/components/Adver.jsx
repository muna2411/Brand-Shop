import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Adver = () => {
    return (
        <div>
        <div className='my-[50px] lg:w-[700px] sm:w-[630px] h-[500px] lg:mx-[530px] sm:mx-[0px]'>
          
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