import React from 'react';
import './LeftCard.css';

export default function LeftCard(props) {
    return (
        <div className='leftCard'>
            <text className='destination'>
                {props.destination}
            </text>
            <br>
            </br>
            <text className='date'>
                {props.date}
            </text>
            <p className='summary'>
                {props.summary}
            </p>
            <img className='leftImage' src={props.image} alt={'leftImage'} width={props.width} height={props.height}>
            </img>
        </div>
    );
}