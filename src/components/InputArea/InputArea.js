import React, { useState, useEffect, useRef } from 'react';
import './InputArea.css';
import { ReactComponent as InputButtonIcon } from '../../assets/inputbutton.svg'; // Assuming SVG is in the same directory

const InputArea = ({ onSendMessage }) => {

    // State and refs
    const [inputValue, setInputValue] = useState('');
    const textareaRef = useRef(null);

    // Event handlers
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
            onSendMessage(inputValue);
            console.log(inputValue)
            setInputValue('');
    
    };

    // Handling Enter key press without adding a new line
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage(event);
        }
    };

    // Effects
    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [inputValue]);

    // Render method
    return (
        <div className="input-area">
            <div className="text-input-and-button">
                <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    placeholder="Send a message..."
                    className="text-input"
                />
                <button className={`send-button ${inputValue ? 'lit' : ''}`} onClick={handleSendMessage}>
                    <InputButtonIcon />
                </button>
            </div>
        </div>
    );
};

export default InputArea;
