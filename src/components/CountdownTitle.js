import react from 'react'
import ReactDom from 'react-dom'
import '../css/Timer.css'

export default function CountdownTitle({title}){
    return(
        <h1 className='countdown-title'>{title}</h1>
    )
}