import React from 'react'
import '../css/NavBar.scss'
import reactdom from 'react-dom'

export default function SideBarMenu({ showSideBar }) {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <button className="menu-close-button" onClick={() => showSideBar(false)}>X</button>
                <p className="menu-title">Beer Countdown</p>
            </div>
            <div className='sidebar-items'>
                <p>Created By Seamus Harkin</p>
                <div class="social-container">
                    <ul class="social-icons">
                        <li><a href="https://www.facebook.com/seamus.harkin.79" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/seamus-harkin/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/aecko" target="_blank"><i class="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}