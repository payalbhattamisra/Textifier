import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter the Text');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const convertFont = () => {
    document.getElementById('myBox').style.fontStyle = 'italic';
  };

  const normal = () => {
    document.getElementById('myBox').style.fontStyle = 'normal';
  };

  const bolding = () => {
    document.getElementById('myBox').style.fontWeight = 'bold';
  };

  var i = 0;

  const tryFont = () => {
    var fonts = [
      'Times New Roman',
      'sans-serif',
      'serif',
      'cursive',
      'ui-serif',
      'math',
      'fangsong',
      'fantasy',
      'Lucida Console',
    ];
    if (i === fonts.length) {
      i = 0;
    }
    document.getElementById('myBox').style.fontFamily = fonts[i];
    i++;
  };

  const clear = () => {
    let newText = '';
    setText(newText);
  };

  const buttonStyle = {
    backgroundColor: '#1a75ff', // Set your desired background color
    color: 'white', // Set your desired text color
    padding: '10px', // Adjust the padding as needed
    margin: '5px', // Adjust the margin as needed
    borderRadius: '5px', // Add border-radius for rounded corners
    cursor: 'pointer', // Change cursor on hover
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="custom-textarea"
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{
              width: '90%', // Set the width to 90% of the container
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            value={text}
          ></textarea>
        </div>
        <button style={buttonStyle} onClick={convertUpper}>
          Uppercase
        </button>

        <button style={buttonStyle} onClick={convertLower}>
          Lowercase
        </button>

        <button style={buttonStyle} onClick={convertFont}>
          Italic
        </button>

        <button style={buttonStyle} onClick={normal}>
          Normalize Text
        </button>

        <button style={buttonStyle} onClick={bolding}>
          Bold
        </button>

        <button style={buttonStyle} onClick={clear}>
          Clear Text
        </button>

        <button style={buttonStyle} onClick={tryFont}>
          Try Different Fonts
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {text.split('').length} words and {text.length} characters
        </p>
        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {0.008 * text.split('').length} Minutes to Read content
        </h3>
      </div>
    </>
  );
}
