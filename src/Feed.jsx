import React, { useEffect, useState } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice.js';
import FlipMove from 'react-flip-move';

function Feed() {
const [posts, setPosts] = useState([]);
const [input, setInput] = useState('');
const [user, setUser] = useState(useSelector(selectUser));

useEffect(() => {
    console.log("use Effect running from feed.jsx")
    const unsubscribe = db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
    setPosts(snapshot.docs.map((doc) => (
        {
            id:doc.id,
            data: doc.data(),
        }
    )))
  ))

return () => unsubscribe();
},[])


const sendPost = e =>{
    e.preventDefault();
    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
};

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input value={input} type="text" onChange={e => setInput(e.target.value)}/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>
        </div>
        <FlipMove>        
        {posts.map(({id, data:{name, description, message, photoUrl}}) => (
                    //   console.log("from map function: ", name, description, message, photoUrl)
            <Post
            key={id}
            name={name}
            description={description}
            message={message} 
            photourl={photoUrl}
            />
        ))} 
        {/* <Post name="Uzair Shaikh" description="This is a test" message="Message wil be displayed here" /> */}
        </FlipMove> 
    </div>
  )
}

export default Feed