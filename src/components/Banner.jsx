import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner=()=> {
 
    return (
        
          <div>
        <div className='my-[50px] w-[1200px] h-[700px] mx-[280px]'>
          
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
     className="mySwiper"
    >
      <SwiperSlide>
      <img className="w-[1200px] h-[700px]" src="https://i.ibb.co/y8mmMD4/22.jpg" ></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[1200px] h-[700px]" src="https://i.ibb.co/GFk0sYf/27.jpg" ></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[1200px] h-[700px]" src="https://i.ibb.co/Czk1J5M/21.jpg"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-[1200px] h-[700px]"src="https://i.ibb.co/x60TtVJ/37.jpg" ></img>
      </SwiperSlide>
     
    </Swiper>
 
        </div>
        <div className='flex justify-around items-center my-[100px]'>
        <div>
            <i className="text-black text-[50px] font-bold mx-[5px]">Individuality of your design. <br/>Create your style .</i>
            <p className="text-[20px] text-[#808080]">High Quality Fashion...</p>
        </div>
        <div>
            <p className="text-[18px]">Welcome to Wish, where style meets innovation and sophistication. At Wish, we are dedicated to redefining <br/> 
               fashion through a blend of contemporary design, sustainable practices, and unmatched quality. Our team of <br/>
               visionary designers continuously crafts collections that resonate with the latest trends, ensuring you always<br/> 
               step out in style. We take pride in our commitment to sustainability, using eco-friendly materials and ethical <br/>
               manufacturing processes to create fashion that not only makes you look good but feel good about your choices. <br/>
               With a global reach and a seamless online shopping experience, Wish makes it effortless to access our curated <br/>
               fashion selections. From chic urban wear to elegant evening attire, our collections cater to diverse tastes.<br/>
               Discover the essence of timeless style with Wish.</p>
        </div>
        </div>

        
        <div className='text-center my-[80px] mt-[150px]'>
            <p className="text-black text-[60px] font-bold divider">The Brand Collection</p>
            <p className="text-[#808080] text-[20px] mt-[50px] ">Choose your fashion style</p>
        </div>
        </div>
    );
};

export default Banner;