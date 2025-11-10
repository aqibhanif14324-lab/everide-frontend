import React from 'react'
import { activities } from '../Header/Data'
import "./style.css"
const BottomHeader = () => {
  return (
    <div className='bottom_container_main '>
        <div className='container bottom_header'>
        {
            activities.map((item, index) => (
                <div key={index} className='bottom_header_item'>
                   
                    <p className='bottom_header_title'>{item}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default BottomHeader