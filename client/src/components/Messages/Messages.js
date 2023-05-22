import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages ps-container ps-theme-default ps-active-y" id="chat-content">

    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
      </ScrollToBottom>

);

export default Messages;