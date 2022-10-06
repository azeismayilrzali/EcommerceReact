import React from 'react'
import '../components/Blog/Blog.css'
import { Link } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import HeadingBottom from '../components/Header/HeadingBottom'
import HeadingMiddle from '../components/Header/HeadingMiddle'
function Blogpage() {
    return (
        <>
         <HeadingMiddle />
            <HeadingBottom /> 
        <div className="blogPage">

            <div className="bread">
                <ul className="breadcrumb">
                    <li><Link to="#" id="homepage">Home</Link></li>
                    <li>Blog Page</li>
                </ul>
            </div>

            <Blog />

        </div>
        <hr style={{marginBottom:'8%'}}/></>
    )
}

export default Blogpage
