import React from 'react'
import './Button.css';

const button=(props)=>(
    <button onClick={props.clicked} 
    className='Buttons' className={props.btnType} > {props.children} </button>
);

export default button;