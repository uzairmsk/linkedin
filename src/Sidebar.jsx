import React, { useState } from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {
    // const user = useSelector(selectUser);
    const [user, setUser] = useState(useSelector(selectUser));
 

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
            {/* <img key={user.uid} src={src} alt="" /> */}
            <Avatar className='sidebar__avatar' key={user.uid} src={user.photoUrl}> 
            {user.displayName[0].toUpperCase()}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
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