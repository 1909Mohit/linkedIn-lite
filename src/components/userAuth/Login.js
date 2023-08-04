import React, { useState } from 'react';
import "./Login.css";
import { auth } from '../../firebaseConfig';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password).then(userAuth => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
        email: email,
      }).then(() => {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }));
      }
      )
    }).catch((error) => alert(error));
  }

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(userAuth => {
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        profileUrl: userAuth.photoURL
      }))
    }).catch((error) => alert(error));
  }
  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full name (required if registering)' />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>
        Not a member?&nbsp;
        <span className='login_register' onClick={register}>Register Now</span>
      </p>
    </div>
  )
}

export default Login