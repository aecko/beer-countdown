import React from 'react'
import CountdownTimer from './CountdownTimer'
import CountdownTitle from './CountdownTitle'

export default function CountdownContainer({title, date, color, backgroundColor}) {
    return (
        <div className='countdown-container' style={{backgroundColor: backgroundColor, color: color}}>
            <CountdownTitle title={title}/>
            <CountdownTimer date={date}/>
        </div>
    )
}