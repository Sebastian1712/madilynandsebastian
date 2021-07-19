import React from 'react';
import './VerticalCard.css';

export default function VerticalCard(props) {
    return (
        <div className='vertical-container-1'>
            <div className='vertical-box-1'>
                <h5 className='vertical-info'>{props.destination}<br></br>{props.date}</h5>
                <img className='verticalImg' src={props.image} alt={'verticalImg'} width={props.width} height={props.height}></img>
            </div>
            <div className='vertical-box-2'>
                <p className='summary'>{props.summary}</p>
            </div>
        </div>
    );
}