import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../assets/videos/video2.mp4'

import {FiSend} from 'react-icons/fi'
import {MdTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BiChevronRight} from 'react-icons/bi'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

//Lets create a react hook to add a scroll animation

useEffect(()=>{
    Aos.init({duration:2000})
}, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos= "fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos= "fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos= "fade-up" className="btn flex" type="submit">
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdTravelExplore className='icon' />    Travel.
                            </a>
                        </div>

                        <div data-aos= "fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Labore obcaecati commodi ut dolorem ab similique ex repudiandae,
                             iste suscipit neque. 
                        </div>
                          
                          <div data-aos= "fade-up" className="footerSocials">
                              <AiOutlineTwitter className="icon"/>
                              <AiFillYoutube className="icon"/>
                              <AiFillInstagram className="icon"/>
                              <FaTripadvisor className="icon"/>
                          </div>
                    </div>
                    <div className="footerLinks grid">

                       {/*  Group One */}
                        <div data-aos= "fade-up" data-aos-duration = "3000" className="linkGroup">
                            <span className="groupTitle">
                                Our Agency
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                       {/*  Group Two */}
                        <div data-aos= "fade-up" data-aos-duration = "4000" className="linkGroup">
                            <span className="groupTitle">
                                Bookings
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                       {/*  Group Three*/}
                        <div data-aos= "fade-up" data-aos-duration = "5000" className="linkGroup">
                            <span className="groupTitle">
                               LAST MINUTE 
                            </span>

                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                London
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                              California
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                               Europe
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className="icon" />
                               Ocenia
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>cOPYRIGHT RESERVED - DONCREATIONS 2023 </small>
                    </div>
                     
                </div>
            </div>
        </section>
    )
}

export default Footer
