import React, { useState, useEffect } from "react";

import axios from 'axios';

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const { name, room } = queryString.parse(location.search);

  //   setRoom(room);
  //   setName(name);

  // }, [ENDPOINT, location.search]);
  
  // useEffect(() => {
    // socket.on('message', message => {
    //   setMessages(messages => [ ...messages, message ]);
    // });
    
    // socket.on("roomData", ({ users }) => {
    //   setUsers(users);
    // });
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      setMessages(messages => [ ...messages, {text: message, user:"me"} ]);

      axios.post('http://127.0.0.1:5000/', {
        message: message
      }).then(response => {
        console.log(messages)
        setMessages(messages => [ ...messages, response.data ]);
        setMessage("")
      });

    }
  }

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card card-bordered">
              <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Chat;
