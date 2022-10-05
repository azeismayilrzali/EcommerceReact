import React from 'react'
import Logo from './Logo'
import Cart from './Cart'
import Search from './Search'

function HeadingMiddle() {

    return (
        <div className="mainHeader">
            <Logo />
            <div className='two'>
                <Search />
                <Cart />
            </div>
        </div>
    )
}

export default HeadingMiddle
