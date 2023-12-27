import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
function Posts({name, description, message, photourl}) {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>Uzair Shaikh</h2>
          <p> Description          </p>
        </div>
      </div>
      <div className="post__body">
        <p>Messages will be seen here</p>       
      </div>
    </div>
  )
}

export default Posts