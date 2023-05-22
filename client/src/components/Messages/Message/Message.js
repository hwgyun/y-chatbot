import React from 'react';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  if(user === "me") {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
                <div className="media media-chat media-chat-reverse">
                  <div className="media-body">
                    <p>{text}</p>
                  </div>
                </div>
        )
        : (
                <div className="media media-chat">
                  <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                  <div className="media-body">
                    <p>{text}</p>
                  </div>
                </div>
        )
  );
}

export default Message;