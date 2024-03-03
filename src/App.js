import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import InputArea from './components/InputArea/InputArea';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]); // Initialize with the default message

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]); // Append new message
    console.log(messages)
  };


  return (
    <div className="app">
      <MainContent messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
