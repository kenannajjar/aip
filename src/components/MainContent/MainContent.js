import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg'; // Corrected import name
import './MainContent.css';

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Mistral');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, [dropdownRef]); 

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]); 

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  return (
    <div className="main-content">
      <div className={`dropdown-menu ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        {selectedOption}
        <DropdownIcon className="dropdown-icon" />
        {isOpen && (
          <div className="dropdown-content" ref={dropdownRef}>
            <div onClick={() => selectOption('Mistral')}>Mistral</div>
            <div onClick={() => selectOption('Stable Diffusion')}>Stable Diffusion</div>
            <div onClick={() => selectOption('Ollama')}>Ollama</div>
          </div>
        )}
      </div>
      <div className="centered-message">
        How can I help you today?
      </div>
    </div>
  );
};

export default MainContent;
