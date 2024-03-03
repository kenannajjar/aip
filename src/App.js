import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import InputArea from './components/InputArea/InputArea';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Mistral');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    console.log(selectedOption)
  };

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
    console.log(messages)
  };


  return (
    <div className="app">
      <MainContent messages={messages}
        onOptionChange={handleOptionChange}
        selectedOption={selectedOption} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
