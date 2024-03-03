import React, { useState, useEffect, useRef } from 'react';
import './InputArea.css';
import { ReactComponent as InputButtonIcon } from '../../assets/inputbutton.svg'; 

const InputArea = ({ onSendMessage }) => {

    const [inputValue, setInputValue] = useState('');
    const textareaRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            onSendMessage(inputValue.trim()); 
            console.log(inputValue.trim()); 
            setInputValue('');
        }
    };
    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSendMessage(event);
        }
    };

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [inputValue]);

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
