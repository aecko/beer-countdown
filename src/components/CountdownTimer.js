import react from 'react'
import ReactDom from 'react-dom'
import Countdown from 'react-countdown';
import CountdownValue from './CountdownValue';
import '../css/Timer.css'

export default function CountdownTimer({ date }) {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <p>GO GET SOME BEER</p>
        }
        else {
            if (days <= 10) {
                return (
                    <div className='countdown-clock'>
                        <CountdownValue value={days} label='Days' />
                        <CountdownValue value={hours} label='Hours' />
                        <CountdownValue value={minutes} label='Mins' />
                        <CountdownValue value={seconds} label='Secs' />
                    </div>
                )
            }
            else {
                return (
                    <div className='countdown'>
                        <CountdownValue value={days} label='Days' />
                    </div>
                )
            }

        }

    }
    return (
        <Countdown
            date={date}
            renderer={renderer}
        />
    )
}