import React from 'react';
import './ChatList.css';

let i = 0;
export default ({ chats }) => (
  <ul id="chatList">
    {chats.map((chat) => {
      ++i;
      return (
        <div id="chat" key={i}>
          <div className="name">{chat.username}</div>
          <div className="message">{chat.message}</div>
        </div>
      );
    })}
  </ul>
);
