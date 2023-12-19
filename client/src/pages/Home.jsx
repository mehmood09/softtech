import React from "react";
import heroImg01 from "../assets/images/hero-img10.png";
import heroImg02 from "../assets/images/hero-img20.png";
import heroImg03 from "../assets/images/hero-img40.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
//import About from "../components/About/About";
//import ServiceList from "../components/Services/ServiceList"
import NotesList from "../components/Tutorials/NotesList"
import NoteList from "../components/Tutorials/NoteList"

import DoctorList from "../components/Doctors/DoctorList"
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import Portfolio from '../components/UI/Portfolio';

const Home = () => {
  return (
    <>
      
      {/*==================== hero section =============== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*==================== hero content =============== */}
            <div>
              <div className="lg:w-[570px]">
                <h3
                  className="text-[14px] leading-[6px] text-headingColor font-[600]
                            md:text-[60px] md:leading-[70px] "
                >
                  Learn Anywhere, <br/> On Your Schedule  
                </h3>
                <p className="text__para text-justify">
                 To provide one step solution to all of our customers needs ranging from software and business automation.
                  At Alhamd Solution we follow a strict process procedure, which allows us to work productively with clients,
                  saving time and maintaining the highest level of quality. We have the best strategy and business consultants in
                  our team, this allows us to undestand the clients exact needs and develop the perfect solution for him. Our mission
                  is to provide innovative affoardable Business and Technology Solutions.
                </p>
                <button className="btn">Request an Appointment </button>
              </div>
              {/*==================== hero counter =============== */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center
                         gap-5 lg:gap[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                font-[700] text-headingColor"
                  >
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                font-[700] text-headingColor"
                  >
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Students Batch</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]
                                font-[700] text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Student Satisfaction</p>
                </div>
              </div>
            </div>
            {/*==================== hero content =============== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded" src={heroImg01} alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/*==================== hero section end =============== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the Best Training Services
            </h2>
            <p className="text__para text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repudiandae, dolore voluptatem quibusdam soluta autem aperiam rem possimus, quisquam modi exercitationem, praesentium inventore officia facilis tenetur? Iusto rerum quas saepe?
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
                    lg:mt-[55]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Quick Learning
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit, officiis et sed nihil voluptatem saepe libero consequuntur eum ducimus. Suscipit blanditiis tenetur neque perferendis similique, repellat expedita ullam excepturi.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                                hover:border-none"
                >
                  {" "}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />{" "}
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  All Time Support
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti animi beatae tempore eaque necessitatibus! Possimus, magnam. Culpa cumque nihil expedita temporibus, quo ea consequuntur iusto atque! Fugiat, fugit laudantium?
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                                hover:border-none"
                >
                  {" "}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />{" "}
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Certification
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit illum, illo odit dolores eveniet itaque dolorum obcaecati, labore ipsam ipsum modi pariatur, quod non placeat optio vero incidunt exercitationem nulla!
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid 
                                border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                                hover:border-none"
                >
                  {" "}
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />{" "}
                </Link>
              </div>
            </div>
     
              {/* =================== feature content ================*/}
              <div className="xl:w-[670px]">
                        <h2 className="heading"> 
                            Why Choose Us.
                        </h2>
                        <p className="text__para text-justify">
                        To provide one step solution to all of our customers needs ranging from software and business automation.
                  At Alhamd Solution we follow a strict process procedure, which allows us to work productively with clients,
                  saving time and maintaining the highest level of quality. We have the best strategy and business consultants in
                  our team, this allows us to undestand the clients exact needs and develop the perfect solution for him. Our mission
                  is to provide innovative affoardable Business and Technology Solutions.
                        </p>
                        <Link to="/"><button className="btn">Learn More</button></Link>
                        </div>  
                              <div className="relative z-10 xl:w-[870px] flex justify-end mt-[50px] lg:mt-0">
                                  <img src={heroImg03} className="w-3/4 rounded" alt="" />
                              </div>
                        </div>
                      </div>
      </section>


{/*============= Doctor List==============*/}
      {/*
      <section>
              <div className="container">
                <div className="xl:w-[470px] mx-auto">
                  <h2 className="heading text-center">Our Great Doctor</h2>
                  <p className="text__para text-center">
                      World-class care for everyone. Our health System offers unmatched, expert health care.
                  </p>
                </div>
                <DoctorList/>
              </div>
      </section>
  */}
{/*============= Doctor List End==============*/}
    {/* =================== faq Section ================*/}
     {/*
     <section>
      <div className="container">
        <div className="flex justify-between gap-[50] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="heading"> Questions by our Students</h4>
            <FaqList />
          </div>
        </div>
      </div>
     </section>
    */}
    {/* =================== faq Section end ================*/}
      
    <Portfolio />
      {/* =================== Testimonial Section ================*/}
      
       <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Students Voice</h2>
            <p className="text__para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur nulla corrupti aut optio recusandae.
            </p>
          </div>
         <Testimonial/>
        </div>
        </section> 
      {/* =================== Testimonial Section End ================*/}

    </>
  );
};
export default Home;
