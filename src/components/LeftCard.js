import React from 'react';
import './LeftCard.css';

export default function LeftCard(props) {
    return (
        <div className='container-1'>
            <div className='box-1'>
                <h5 className='info'>{props.destination}<br></br>{props.date}</h5>
                <img className='leftImage' src={props.image} alt={'leftImage'} height={props.height}></img>
            </div>
            <div className='box-2'>
                <p className='summary'>{props.summary}</p>
            </div>
        </div>
    );
}