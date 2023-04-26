import React, {useState} from 'react'

import './navbar.scss'
import {GiTentacleHeart} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    const [active,setActive] = useState('navBar')

    //Function to toggle navBar
const showNavBar = ()=>{
    setActive('navBar activeNavbar')
}

const removeNavBar = ()=>{
    setActive('navBar')
}


    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><GiTentacleHeart className='icon' />M.
                        LIFE</h1>
                        </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navLink">Wishes</a>
                        </li>
                       
                        <li className="navItem">
                            <a href="" className="navLink">About</a>
                        </li>
                       
                        
                        <li className="navItem">
                            <a href="" className="navLink">Contact</a>
                        </li>

                        {/* <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button> */}
                    </ul>

                    <div onClick={removeNavBar}
                    className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>
            <div onClick={showNavBar}
            className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
            
            </header>
        </section>
    )
}

export default Navbar
