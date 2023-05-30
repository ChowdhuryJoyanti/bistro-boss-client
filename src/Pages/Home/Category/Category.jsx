import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';







const Category = () => {
    return (
        <section>
            <SectionTitle 
                    subHeading={"From 11.00 am to 10.00pm "}
                    heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                     <img src={slide1} alt="" />
                     <h4 className='text-3xl uppercase text-center -mt-16'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>   
                    <img src={slide1} alt="" />
                    <h4 className='text-3xl uppercase text-center -mt-16'>Pizza</h4>v
                </SwiperSlide>
                <SwiperSlide> 
                      <img src={slide2} alt="" />
                      <h4 className='text-3xl uppercase text-center -mt-16'>Sopus</h4>
                      </SwiperSlide>
                <SwiperSlide> 
                      <img src={slide3} alt="" />
                      <h4 className='text-3xl uppercase text-center -mt-16'>dessesrts</h4>
                      </SwiperSlide>
                <SwiperSlide>   
                    <img src={slide4} alt="" />
                    <h4 className='text-3xl uppercase text-center -mt-16'>Salads</h4>
                    </SwiperSlide>
                <SwiperSlide>  
                     <img src={slide5} alt="" />
                     <h4 className='text-3xl uppercase text-center -mt-16'>Salads</h4>
                     </SwiperSlide>
             
            </Swiper>
        </section>
    );
};

export default Category;