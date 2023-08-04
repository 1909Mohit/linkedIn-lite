import { CalendarViewDay, Create, Event, Image, InputTwoTone, Subscriptions } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import { db } from '../../firebaseConfig.js';
import { addDoc, collection, serverTimestamp, getDocs, orderBy, query } from 'firebase/firestore';
import { useSelector } from 'react-redux';

const Feed = () => {
  const user = useSelector(state => state.user.user);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const posts = query(collection(db, "posts"), orderBy('timestamp', 'desc'));
      await getDocs(posts)
        .then(snapshot => {
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
    }
    getData();
  }, [posts]);

  const sendPost = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'posts'), {
      name:user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp()
    })
    setInput("");
  }

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form action="submit">
            <input value = {input} onChange= {e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
          
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={ Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={ Subscriptions} title="Video" color="#e7e33e" />
          <InputOption Icon={ Event} title="Event" color="#c0cecd" />
          <InputOption Icon={ CalendarViewDay} title="Write Article" color="#7fc15f" />
        </div>
      </div>

      {/* posts */}
      {
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))
      }
  
      
    </div>
  )
}

export default Feed