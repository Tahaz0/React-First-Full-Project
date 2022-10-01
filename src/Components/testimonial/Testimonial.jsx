import React from 'react';
import './testimonial.css';
import AVTAR1 from '../../assets/avatar1.jpg';
import AVTAR2 from '../../assets/avatar2.jpg';
import AVTAR3 from '../../assets/avatar3.jpg';
import AVTAR4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


/// Import Swiper styles////
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const avtData = [
    {
        image: AVTAR1,
        name: 'Kwami Dspite',
        reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium rerum vero quam possimus laborum nemo maxime aspernatur iure atque.'
    },
    {
        image: AVTAR2,
        name: 'Franklin',
        reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium rerum vero quam possimus laborum nemo maxime aspernatur iure atque.'
    },
    {
        image: AVTAR4,
        name: 'MS. Y',
        reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium rerum vero quam possimus laborum nemo maxime aspernatur iure atque.'
    },
    {
        image: AVTAR3,
        name: 'MR. X',
        reviews: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium rerum vero quam possimus laborum nemo maxime aspernatur iure atque.'
    },
]


function Testimonial() {
    return (
        <section id='testimonial'>
            <h5>
                Review From Clints
            </h5>
            <h2>Testimonial</h2>

            <Swiper className="container testimonial-container"
                modules={[Navigation, Pagination]}
                spaceBetween={45}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

            >
                {
                    avtData.map(({ image, name, reviews }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="clint-img">
                                    <img src={image} alt="" />
                                </div>
                                <h5> {name} </h5>
                                <small className='clint-review text-light'>
                                    {reviews}
                                </small>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonial;