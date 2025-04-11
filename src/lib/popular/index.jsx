import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-full"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
        >
            {[
                { src: "https://placehold.co/500x400", title: "Crepa de nutella." },
                { src: "https://placehold.co/500x400", title: "Crepa Peperoni" },
                { src: "https://placehold.co/500x400", title: "Crepizza" },
                { src: "https://placehold.co/500x400", title: "Crepizza Hawai" },
                { src: "https://placehold.co/500x400", title: "Marquesita Natural" },
                { src: "https://placehold.co/500x400", title: "Marquesita de pizza" },
                { src: "https://placehold.co/500x400", title: "Mousse Chocolate" },
                { src: "https://placehold.co/500x400", title: "Mousse Oreo" },
                { src: "https://placehold.co/500x400", title: "Fresas con chocolate" },
            ].map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="max-w-sm w-full lg:max-w-full lg:flex h-auto">
                        <div
                            className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
                            style={{ backgroundImage: `url(${item.src})` }}
                            title={item.title}
                        ></div>
                        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                            <div className='mb-8'>
                                <p className='text-sm text-gray-400 flex items-center font-bold'>
                                    <span className="icon-[material-symbols--star-shine-outline-rounded] text-yellow-400"></span>
                                    El favorito del público
                                </p>
                                <div className='text-gray-900 font-bold text-xl mb-2'>{item.title}</div>
                                <p className='text-gray-700 text-base'>{item.title}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}