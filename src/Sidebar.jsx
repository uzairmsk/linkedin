import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'


function Sidebar() {
    const recentItem = (topic) => ( 
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://i.pinimg.com/564x/65/f9/c9/65f9c9cab49ace21f7f412beb32356fc.jpg" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Uzair Shaikh</h2>
            <h4>uzairmsk.k@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you </p>
                <p className="sidebar__statNumber">2,546</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post </p>
                
                <p className="sidebar__statNumber">2,546</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('programing')}
            {recentItem('nodejs')}
            {recentItem('design')}
            {recentItem('devops')}
            {recentItem('devsecops')}

        </div>
    </div>  
   
  )
}

export default Sidebar