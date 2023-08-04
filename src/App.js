import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import Feed from './components/Feed/Feed.js';
import Widgets from './components/Widgets.js';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/userAuth/Login';
import { auth } from './firebaseConfig';
import { login, logout } from './features/userSlice';


function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(()=> {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      } else {
        dispatch(logout());
      }
    })
  }, []);
  
  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login/>
        ): (
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
