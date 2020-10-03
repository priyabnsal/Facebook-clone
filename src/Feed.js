import React, { useState, useEffect } from 'react';
import "./Feed.css";
import StoryRow from './StoryRow';
import MessangerSender from './MessangerSender';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts]= useState([]);
useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
    );
    
}, []);

    return (
        <div className="feed">
            <StoryRow />  
            <MessangerSender />      
            
            {posts.map((post) => (
            <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
            />
            ))}


            {/* <Post 
                profilePic="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ftechnopriya%2F&psig=AOvVaw05UEj_B-q_QuW22Bo4X3Et&ust=1598896303319000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCFta2_w-sCFQAAAAAdAAAAABAD"
                message="WOW This Works"
                timestamp='Timestamp'
                username='priyabansal'
                image='https://source.unsplash.com/collection/190727/720x500'
            />
            <Post 
                profilePic='https://source.unsplash.com/collection/190727/720x500'
                message="WOW This Works"
                timestamp="Timestamp"
                username='priyabansal'
                image='https://source.unsplash.com/collection/190727/720x500'
            /> */}
           

        </div>
    );
}

export default Feed;
