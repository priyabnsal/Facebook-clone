import React from 'react';
import "./StoryRow.css";
import Story from './Story';

function StoryRow() {
    return (
        <div className="storyReel">
          <Story
            image="https://source.unsplash.com/user/erondu/daily"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoHNoB3Fc1TGLplshT1DY5s8WDGIttJnVh5A&usqp=CAU"
            title="Priya Bansal"
            />
        <Story
            image="https://source.unsplash.com/daily" 
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVQbIjOGxAUP8tOn9-RN2wq6pZr6OBLckq0Q&usqp=CAU"
            title="Abhishek"
            />
        <Story
            image="https://source.unsplash.com/weekly?water" 
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPXqQt1AvNLUWt3Jh-ORA6KDBCgqEs2v5Nwg&usqp=CAU"
            title="Deepak Bansal"
        />
        <Story
            image="https://source.unsplash.com/WLUHO9A_xik/1600x900" 
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuHzN7TvEJ8lh7pFhTDmZEo_RbiNptJdR-Dg&usqp=CAU"
            title="Monika Goyal"
        />
        </div>
    )
}

export default StoryRow;
