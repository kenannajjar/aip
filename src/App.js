import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import InputArea from './components/InputArea/InputArea';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <MainContent />
      <InputArea />
    </div>
  );
};

export default App;
