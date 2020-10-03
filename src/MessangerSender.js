import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function MessangerSender() {
    const [{ user }, dispatch]= useStateValue();
   const [input, setinput] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            image: imageUrl,
        });

        setinput("");
        setImageUrl("");
    };
    return (
        <div className="messageSender">

        <div className="messageSender_top">
            <Avatar src={user.photoURL} />
            <form>
                <input
                value={input}
                onChange={(e) => setinput(e.target.value)}
                className="messageSender_input"
                placeholder={`What's on your mind, ${user.displayName}`} />
                <input
                 value={imageUrl}
                 onChange={(e) => setImageUrl(e.target.value)}
                placeholder="image URL optional " />
                <button onClick={handleSubmit} type="submit" >
                    Hidden Submit
                </button>
            </form>
        </div>

        <div className="messageSender_button">
        
            <div className="messageSender_option">
                <VideocamIcon style={{ color: "red"}} />
                <h3>Live Video</h3>
              
            </div>
            <div className="messageSender_option">
            <PhotoLibraryIcon style={{ color: "green"}}/>
                
                <h3>Photo/Video</h3>
                
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{ color: "orange"}} />
                <h3>Felling/Activity</h3>
               
            </div>
        </div>
            
        </div>
    )
}

export default MessangerSender;
