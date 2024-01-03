import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import './App.css';
import {auth} from "./firebase.js"
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets.jsx';
import {selectUser} from "./features/userSlice.js";
import { useDispatch } from 'react-redux';
import Login from './Login';
import {login, logout} from "./features/userSlice"
function App() {
  // const user = {};
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {
    console.log("-------------------------------------------------------------------")
   auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout());
      }
    })
    console.log(auth)
  }, [])
  return (
    <div className="App">
     
      {!user ? (<Login /> ):(
        <div className='app__head'>
        <Header />
        <div className="app__body">
        
        <Sidebar />
        <Feed /> 
        <Widgets />
        {/* Stopped at 4:00:00: Continue from here for firebase hosting */}
     </div>
     </div>
      )}
     
      
 
    </div>
  );
}

export default App;