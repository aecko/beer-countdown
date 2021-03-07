import React from 'react'
import '../css/Timer.css'

export default function CountdownValue({value, label}){
    return (
        <div className='countdown-value-container'>
            <p className='countdown-value'>{value}</p>
            <p className='countdown-value-label'>{label}</p>
        </div>
    )
}