import React, { useState, useRef } from 'react'
import { Transition } from 'react-transition-group';
import Description from './Description'
import Review from './Review'

function DetailDescBottom() {

    const yellowRef = useRef()
    window.onresize = function () {
        let line = document.getElementById("yellow-underline");
        yellowRef.current.style.width = `${line.parentNode.firstElementChild.offsetWidth}px`;
    };

    function yellowLine(e) {
        let parentWidth = e.target.offsetWidth;
        let parentLeft = e.target.offsetLeft;
      
        document.getElementById("yellow-underline").style.width = `${parentWidth}px`;
        document.getElementById("yellow-underline").style.left = `${parentLeft}px`;
        e.target.style.color = "white";
        
        if(e.target.innerHTML === 'Description'){
            e.target.parentNode.nextElementSibling.firstElementChild.style.color="rgb(170,168,168,168)";
            e.target.parentNode.nextElementSibling.nextElementSibling.firstElementChild.style.color="rgb(170,168,168,168)";

        }else if(e.target.innerHTML === 'Reviews'){
        e.target.parentNode.previousElementSibling.firstElementChild.style.color="rgb(170,168,168,168)"
        e.target.parentNode.nextElementSibling.firstElementChild.style.color="rgb(170,168,168,168)"
      }else if(e.target.innerHTML === 'Questions'){
        e.target.parentNode.previousElementSibling.firstElementChild.style.color="rgb(170,168,168,168)"
        e.target.parentNode.previousElementSibling.previousElementSibling.firstElementChild.style.color="rgb(170,168,168,168)"

      }


    }

    const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)
    const [isReviewOpen, setIsReviewOpen] = useState(false)

    const descHandler = () => {
        setIsDescriptionOpen(true)
        setIsReviewOpen(false)
    }
    const reviewHandler = () => {
        setIsReviewOpen(true)
        setIsDescriptionOpen(false)
    }

    return (
        <div className="detailDescBottom">

            <div className="descBottomHeading" style={{position:'relative'}}>
                <div onClick={yellowLine}>
                    <h3 onClick={descHandler} style={{color:'white'}}>Description</h3>
                </div>
                <div onClick={yellowLine}>
                    <h3 onClick={reviewHandler}>Reviews</h3>
                </div>
                <div onClick={yellowLine}>
                    <h3>Questions</h3>
                </div>
                <span id="yellow-underline" class="home-tarrifs-line"  ref={yellowRef} ></span>

            </div>

            {isDescriptionOpen && <Description />}
            {!isDescriptionOpen && < Review />}

        </div>
    )
}

export default DetailDescBottom
