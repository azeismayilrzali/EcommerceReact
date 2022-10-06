import React, { useRef, useEffect } from 'react'
import './Main.css';
import MainLeft from './MainLeft'
import MainRight from './MainRight'
import { connect } from 'react-redux'
import HeadingBottom from '../Header/HeadingBottom';
import HeadingMiddle from '../Header/HeadingMiddle';
function Main(props) {
    const parent = useRef();

    useEffect(() => {
        if (props.toggle) {
            parent.current.style.zIndex = "-50";
            parent.current.style.filter = "blur(20px)";
        } else {
            parent.current.style.zIndex = "50";
            parent.current.style.filter = "blur(0px)";
        }

    }, [props.toggle])

    useEffect(() => {
        if (props.blur) {
            parent.current.style.zIndex = "-50";
        } else {
            parent.current.style.zIndex = "50";
        }

    }, [props.blur])

    return (
        <>
        <HeadingMiddle />
        <HeadingBottom /> 
        <div ref={parent} className="main">
            <MainLeft />
            <MainRight />
        </div></>
    )
}

let mapStateToProps = state => state
export default connect(mapStateToProps)(Main)
