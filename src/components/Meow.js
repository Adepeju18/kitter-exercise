import React from "react";
import Username from "./Username";
import Icon from "./Icon";
import Avatar from "./Avatar";
import Hashtag from "./Hashtag"
import Profile from "../Profile";

const Meow = ({ user, text, hashtags, replies, likes }) => (
  <div className="Meow">
    <div className="top-section">
      <Username name={user.Username} />
      <Profile photo={user.photo} displayName={user.displayName} />
    </div>
    <div className="mid-section">
      <p>{text}</p>
      
      <div className="Hashtag"></div>
      {hashtags.map((hashtag, index)=>(
        <Hashtag key={index} children={hashtag} />
      ))}
      
    </div>
    <div className="bottom-section">
      <Icon type="replies" number={replies} />
      <Icon type="likes" number={likes} />
    </div>
  </div>
);

export default Meow;
