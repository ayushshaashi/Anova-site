import './cards.css';
import React from 'react';
import Kard from './Kard';

const Cards=()=>{
    return(
        <>
        <div className='text'>Our EC <span>Pannel</span></div>
        <div className='layout'>
            <div className='presi'><Kard/></div>
            <div className='hehe'>
                <div className='vp'><Kard/></div>
                <div className='gensec'><Kard/></div>
            </div>
            <div className='hihi'>
                <div className='tech'><Kard/></div>
                <div className='tre'><Kard/></div>
            </div>
            <div className='virtuso'><Kard/></div>
        </div>
        </>
    )
}

export default Cards;