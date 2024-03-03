import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';
import './MainContent.css';
import profilePic from '../../assets/defaultuser.png';


const MainContent = ({ messages, onOptionChange, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const isLocked = messages.length > 0;

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleDropdown = useCallback(() => {
        if (!isLocked) {
          setIsOpen(!isOpen);
        }
      }, [isOpen, isLocked]);

      const selectOption = useCallback((option) => {
        if (!isLocked) {
          onOptionChange(option);
          setIsOpen(false);
        }
      }, [isLocked, onOptionChange]);

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        const handleMouseDown = (event) => handleClickOutside(event);

        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [handleClickOutside]);

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
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <div className="header">
                            <img src={profilePic} alt="Profile" className="profile-pic" />
                            You
                        </div>
                        <div  className="message-text">
                            {message}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} /> { }
            </div>
        </div>
    );
};

export default MainContent;