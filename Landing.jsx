import React from "react";
import './landing.css';
import img2 from './time.svg';

const Landing=()=>{
    return(
        <div className="main">
            <div class="Page">
                <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;ANOVA&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;ANOVA&nbsp;</span>
                </button>
            </div>
            <div className="time" style={{backgroundImage: `url(${img2})`}}>
            </div>
        </div>
    )
}

export default Landing;