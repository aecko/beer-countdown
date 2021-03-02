import react, { useState } from 'react'
import reactdom from 'react-dom'
import '../css/NavBar.css'
import SideBarMenu from './SideBarMenu'

export default function NavBar() {
    const [showSideBar, setShowSideBar] = useState(false)
    return (
        <div className='navbar'>
            <button onClick={()=> setShowSideBar(true)}>☰</button>
            {showSideBar ? <SideBarMenu showSideBar={setShowSideBar}/> : null}
            <h1>Beer Countdown</h1>
        </div>
    )
}