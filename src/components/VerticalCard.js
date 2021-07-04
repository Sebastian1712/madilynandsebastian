import React from 'react';
import './VerticalCard.css';

export default function LeftCard(props) {
    return (
        <div className='verticalCard'>
            <div className='imageBox'>
                <img className='leftImage' src={props.image} alt={'leftImage'} width={props.width} height={props.height}>
                </img>
            </div>
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
        </div>
    );
}