import React, {useEffect} from 'react'
import './main.scss'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import img from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel estination in the World. This place is known for its luxurious stays adventurous activities. '
    },


    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel estination in the World. This place is known for its luxurious stays adventurous activities. '
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always intersting to be in this place '

    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees:'$800',
        description: 'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities. '

    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees:'$1100',
        description: 'A city in central Maxico, Guanajuoto is known for its history of silver mining and colonial architectare. The houses in the city are very attractively painted aith the most bright colors available. Always welcome. '

    },
]

const Main = () => {
//Lets create a react hook to add a scroll animation
    useEffect(()=>{
        Aos.init({duration:2000})
   }, [])


    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos= "fade-right" className="title">
                    Most visited destination
                </h3>
            </div>

             <div className="secContent grid">
                 {/* Use high order array method(.map). */}

                 {
                     Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                          return(
                              <div key={id} data-aos= "fade-up" className="singleDestination">
                                  {/* Here it will return single id from the map array */}

                                  <div className="imgDiv">
                                      <img src={imgSrc} alt={destTitle}/>
                                  </div>

                                  <div className="cardInfo">
                                      <h4 className="destTitle">{destTitle}</h4>
                                      <span className="Continent flex">
                                       <HiOutlineLocationMarker className='icon' />
                                       <span className="name">{location}</span>
                                      </span>

                                      <div className="fees flex">
                                          <div className="grade">
                                              <span>{grade}<small>+1</small></span>
                                          </div>
                                          <div className="price">
                                              <h5>{fees}</h5>
                                          </div>
                                      </div>

                                      <div className="desc">
                                          <p>{description}</p>
                                      </div>

                                      <button className='btn flex'>
                                          DETAILS <BsClipboardCheck className='icon' />
                                      </button>
                                  </div>
                              </div>
                          )
                     })
                 }
             </div>
        </section>
    )
}

export default Main
