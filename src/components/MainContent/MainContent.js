import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg'; // Corrected import name
import './MainContent.css';

const MainContent = () => {
  // State and refs
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Mistral');
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Select an option and close dropdown
  const selectOption = useCallback((option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

  // Close dropdown when clicking outside
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  // Effect to add/remove event listener for outside clicks
  useEffect(() => {
    const handleMouseDown = (event) => handleClickOutside(event);
    
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleClickOutside]);

  // Render
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
