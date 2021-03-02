import react from 'react'
import reactdom from 'react-dom'

export default function SideBarMenu({showSideBar}){
    return(
        <div className='sidebar-container'>
            <div className='sidebar-header'>
                <button onClick={() => showSideBar(false)}>X</button>
            </div>
            <div className='sidebar-items'>
                <p>Created By Seamus - aecko</p>
            </div>
        </div>
    )
}