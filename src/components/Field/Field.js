import React from 'react';
import fieldImg from './../../images/field.jpg';
import './Field.css'

function Field() {
  
    return (
        <div className='block_field'>
                <img  src={fieldImg} className={'field'} alt="" />
        </div>
    );
}


export default Field;
