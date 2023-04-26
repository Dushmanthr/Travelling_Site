import React, {useEffect} from 'react'
import './main.scss'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'

import img from '../../assets/images/img1.jpeg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.png'
import img5 from '../../assets/images/img5.jpeg'
import img6 from '../../assets/images/img6.png'
import img7 from '../../assets/images/img7.png'
import img8 from '../../assets/images/img8.png'
import img9 from '../../assets/images/img9.jpeg'
import img10 from '../../assets/images/img10.jpeg'
import img11 from '../../assets/images/img11.png'
import img12 from '../../assets/images/img12.png'
import img13 from '../../assets/images/img13.jpg'
import img14 from '../../assets/images/img14.png'
import img15 from '../../assets/images/img15.png'
import img16 from '../../assets/images/img16.png'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Adisham Bunglow',
        location: 'Haputale',
        grade: 'CULTURAL RELAX',
        
        description: 'Adisham Bungalow is perched on the edge of a cliff which is flanked by a larger outcrop fringed with tall pine trees, which somehow dwarf the house. The country home also has a wonderful view of the Uva valley, as well as a beautiful garden and orchard that you can stroll through.'
         
    },


    {
        id:2,
        imgSrc: img2,
        destTitle: 'Sabaragamuwa University',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
       
        description: 'SUSL is in the southern foothills of the central mountain range about 162 km from Colombo, on the Colombo–Badulla (A4) road. Administratively, SUSL belongs to the Imbulpe Divisional Secretariat and to the Ratnapura District in Sabaragamuwa Province. '


        
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Sabaragamuwa University Pool Side',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
        fees:'$700',
        description: 'Swimming Pool Sabaragamuwa University Of Sri Lanka is a Swimming pool located in Sri Lanka. It is one of the 237 Swimming pools in Sri Lanka. '

    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Hela Bojun',
        location: 'SUSL',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'Hela Bojun was established 2022 in SUSL. It can be use as a one of canteen in SUSL'

    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Surathali Ella',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'This waterfall does not have a pure vertical shape. It flows over an angle shaped rock. This 50 m tall beauty has pure cool water because of that water stream comes via the virgin forests in Horton Pains. This is one of very few waterfalls having very easy access from road. '

    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'Bambarakanda Water Fall',
        location: 'Kalupahana',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'Bambarakanda Falls (also known as Bambarakele Falls) is the tallest waterfall in Sri Lanka. With a height of 263 m (863 ft),[1] it ranks as the 461st highest waterfall in the world.[2] Situated in Kalupahana in the Badulla District, this waterfall is 5 km (3.1 mi) away from the A4 Highway. The waterfall was formed by Kuda Oya, which is a tributary of the Walawe River. The Bambarakanda Falls can be found in a forest of pine trees. '

    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'Bambarakanda Water Fall',
        location: 'Kalupahana',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'Bambarakanda Falls (also known as Bambarakele Falls) is the tallest waterfall in Sri Lanka. With a height of 263 m (863 ft),[1] it ranks as the 461st highest waterfall in the world.[2] Situated in Kalupahana in the Badulla District '

    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'Bambarakanda Water Fall',
        location: 'Kalupahana',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'A city in central Maxico, Guanajuoto is known for its history of silver mining and colonial architectare. The houses in the city are very attractively painted aith the most bright colors available. Always welcome. '

    },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'Sabaragamuwa University "Hela Bojun"',
        location: 'SUSL',
        grade: 'CULTURAL RELAX',
        fees:'',
        description: 'Hela Bojun was established 2022 in SUSL. It can be use as a one of canteen in SUSL'

    },
    {
        id:10,
        imgSrc: img10,
        destTitle: 'Near Raiway Station',
        location: 'Haputale',
        grade: 'CULTURAL RELAX',
        fees: 'Favourite ',
        description: 'The station is located between Idalgashinna and Diyatalawa railway stations in Badulla District, Uva Province. '

    },
    {
        id:11,
        imgSrc: img11,
        destTitle: 'University of Peradeniya',
        location: 'Peradeniya(Hackathon)',
        grade: 'CULTURAL RELAX',
        fees: 'Strangely Pretty ',
        description: 'The University of Peradeniya is a public university in Sri Lanka, funded by the University Grants Commission. It is the largest university in Sri Lanka, which was originally established as the University of Ceylon in 1942 '

    },
    {
        id:12,
        imgSrc: img12,
        destTitle: 'Bakers Bend',
        location: 'Nanperial',
        grade: 'CULTURAL RELAX',
        fees: 'Dream Place ',
        description: 'Bakers Bend is an observation deck located at the Belihuloya Nanperial Estate in the Ratnapura District, Sabaragamuwa Province, Sri Lanka '

    },
    {
        id:13,
        imgSrc: img13,
        destTitle: 'Belihuloya River',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
        fees: 'Dream Place ',
        description: 'The Belihuloya is a place where most guests spend time sometimes indulging themselves in activities rarely available elsewhere in the world.'

    },
    {
        id:14,
        imgSrc: img14,
        destTitle: 'Unknown',
        location: 'Unknown',
        grade: 'CULTURAL RELAX',
        fees: 'Cute One ',
        description: 'A city in central Maxico, Guanajuoto is known for its history of silver mining and colonial architectare. The houses in the city are very attractively painted aith the most bright colors available. Always welcome. '

    },
    {
        id:15,
        imgSrc: img15,
        destTitle: 'Brumpton',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
       
        description: 'The 6m-high Brampton Falls is set amongst tropical jungle and flows to the Walawe River. It derives its water from the eastern slopes of the Papulugala Mountain (1530m).It is situated 10km from Belihuloya, near the Brampton Tea Estate'

    },
    {
        id:16,
        imgSrc: img16,
        destTitle: 'Brumpton',
        location: 'Belihuloya',
        grade: 'CULTURAL RELAX',
        
        description: 'The 6m-high Brampton Falls is set amongst tropical jungle and flows to the Walawe River. It derives its water from the eastern slopes of the Papulugala Mountain (1530m).It is situated 10km from Belihuloya, near the Brampton Tea Estate '

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
