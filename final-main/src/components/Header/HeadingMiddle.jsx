import React, { useEffect, useState, useRef } from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'

function HeadingMiddle() {
    const touchRef = useRef()
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 150) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])


    return (
        <>
            <div className="mainHeader">
                <Logo />
                <div className='two'>
                    <Search />
                    <Cart />
                </div>


            </div>
            <div className={`act ${show && 'hidden'}`}>
            <div className="flexTouch" ref={touchRef}>
              <a aria-label="Get in Touch " className="rolling-text getInTouch" >
                <div className="spans">
                  <span className="block" >
                    <span className="letter">F</span>
                    <span className="letter">r</span>
                    <span className="letter">e</span>
                    <span className="letter">s</span>
                    <span className="letter">h</span>
                    <span className="letter">n</span>
                    <span className="letter ">e</span>

                    <span className="letter">s</span>
                    <span className="letter">e</span>
                    <span className="letter">c</span>
                    <span className="letter">o</span>
                    <span className="letter">m</span>


                  </span>
                  <span className="block" >
                  <span className="letter">F</span>
                    <span className="letter">r</span>
                    <span className="letter">e</span>
                    <span className="letter">s</span>
                    <span className="letter">h</span>
                    <span className="letter">n</span>
                    <span className="letter ">e</span>

                    <span className="letter">s</span>
                    <span className="letter">e</span>
                    <span className="letter">c</span>
                    <span className="letter">o</span>
                    <span className="letter">m</span>






                  </span>
                </div>

              </a>

            </div>
                <div className='two'>
                    <Search />
                    <Cart />
                </div>

            </div>
        </>
    )
}

export default HeadingMiddle
