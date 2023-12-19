import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/pagination';

import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'



const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[55px]">
        <Swiper modules={[Navigation, Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}}
        breakpoints={{
            640: {
                slidesPerView:1,
                spaceBetween: 0,
            }, 
            768: {
                slidesPerView:2,
                spaceBetween: 20,
            }, 
            1024: {
                slidesPerView:3,
                spaceBetween: 30,
            }, 
        }}
        >
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Faizan Aslam </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus reprehenderit nemo omnis, ullam amet itaque. Delectus culpa cupiditate aliquid doloremque necessitatibus illo. Excepturi nostrum hic voluptatum quaerat velit eveniet corporis!"</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Asif Aleem </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste commodi nam sequi placeat, ipsa aliquam excepturi maxime, officia qui dolorum sunt quas corrupti harum! Fugit explicabo amet magni perferendis distinctio!"</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Ahmad Qadir </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus blanditiis non explicabo amet natus tempora ipsam, corrupti dolorem dignissimos nisi voluptatem, laborum corporis quo modi tenetur nam maxime nihil."
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Kamran Manoor </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta temporibus facilis est corrupti? Maxime provident suscipit amet temporibus. Magni, iure quia soluta eaque consequuntur pariatur molestiae minus ipsum porro!""
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Usman Hussan </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, vitae perferendis. Enim veniam repellendus tempora distinctio eius debitis possimus corporis, deserunt quidem maiores! A fugit quod quos quasi neque quia.""
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt="" />
                    <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor"> Falak Sher </h4>
                        <div className="flex items-center gap-[2px]">
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                            <HiStar className="text-yellowColor w-[18px] h-5" />
                        </div>
                    </div>
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi praesentium, nesciunt iusto magnam illum vitae sunt ipsum vero atque, voluptas omnis quisquam minima tempore corporis dolor quo. Libero, pariatur!""
                </p>
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
                
            )
}
export default Testimonial