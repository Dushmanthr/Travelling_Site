import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../assets/videos/video2.mp4'

import {FiSend} from 'react-icons/fi'
import {GiTentacleHeart} from 'react-icons/gi'
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
                            <GiTentacleHeart className='icon' />   M.LIFE
                            </a>
                        </div>

                        
                          
                          <div data-aos= "fade-up" className="footerSocials">
                              <AiOutlineTwitter className="icon"/>
                              <AiFillYoutube className="icon"/>
                              <AiFillInstagram className="icon"/>
                              <FaTripadvisor className="icon"/>
                          </div>
                    </div>
                    <div className="footerLinks container">

                                I celebrate you every single day, and because this day is extra-special, I celebrate you in a very special way with this special note “Thanks for coming into my life!”
                      
                      
                    </div>

                    <div className="footerDiv">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHT RESERVED - DONCREATIONS 2023 </small>
                    </div>
                     
                </div>
            </div>
        </section>
    )
}

export default Footer
