
import { useEffect, useState } from 'react';
import Result from './Result'
import './Button.css'

export default function Button(props) {

     return (
          <div className='btns'>
               <button className='button' onClick={props.onClick} >{props.value}</button>
          </div>
     )
}