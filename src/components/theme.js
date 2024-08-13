import React, { useState } from 'react';

function Theme() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [bgColor, setBgColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    const handleChangeTheme = () => {
        setIsDarkMode(!isDarkMode);
        setBgColor(isDarkMode ? 'white' : 'black'); 
        setTextColor(isDarkMode ? 'black' : 'white'); 
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const handleRandomColor = () => {
        setBgColor(getRandomColor());
        setTextColor(getRandomColor());
    };

    return (
        <div
            style={{
                backgroundColor: bgColor,
                color: textColor,
                textAlign: 'center',
                padding: '20px',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <button
                onClick={handleChangeTheme}
                style={{
                    backgroundColor: '#4535C1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    marginBottom: '10px',
                }}
            >
                Click me to change the Theme
            </button>
            <button
                onClick={handleRandomColor}
                style={{
                    backgroundColor: '#FF6F61',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                Click me for Random Colors
            </button>
            <p>
                Current theme: {isDarkMode ? 'Dark' : 'Light'}
            </p>
        </div>
    );
}

export default Theme;
