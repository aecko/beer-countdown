import React, {useState} from 'react'
import '../css/NavBar.scss'
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