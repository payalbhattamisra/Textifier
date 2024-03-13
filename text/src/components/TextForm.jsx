import React, { useState, useEffect, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import style from './Style.css';

export default function TextForm(props) {
  const [text, setText] = useState('Enter the Text');
  const [imageUrl, setImageUrl] = useState(null);
  const imageTextRef = useRef(null);

  useEffect(() => {
    // Function to trigger download when imageUrl is updated
    const downloadImage = () => {
      if (imageUrl) {
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.click();
      }
    };

    // Call the function to trigger download
    downloadImage();
  }, [imageUrl]);

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

  const createImage = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    const imageText = imageTextRef.current.value;
    try {
      const dataUrl = await htmlToImage.toPng(document.getElementById('myBox'));
      setImageUrl(dataUrl);
    } catch (error) {
      console.error('Error creating image:', error);
    }
  };

  const buttonStyle = {
    backgroundColor: '#1a75ff',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
   

  return (
    <>
      <div className='body'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
  className="custom-textarea"
  onChange={handleOnChange}
  id="myBox"
  rows="10"
  ref={imageTextRef}
  style={{
    width: '90%',
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  }}
  value={text} // Display the value dynamically
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
      <div className='last'>
        <h1>
          Text Image <br />
          <small style={{ color: props.mode === 'dark' ? 'white' : 'black', fontSize: '20px', fontWeight: 'lighter' }}>
            (Convert Text to Image)
          </small>
        </h1>
        <button style={buttonStyle} onClick={createImage}>
          Download Image
        </button>
        <button style={buttonStyle}>
          {' '}
          <a href="https://github.com/payalbhattamisra/Textifier/archive/main.zip" style={{ textDecoration: 'none', color: 'white' }}>
            Download.zip
          </a>
        </button>
         
          <div className="image-display">
            {imageUrl && (
             <a id="downloadLink" className="image-download" download="text-image.png" href={imageUrl}>
             </a>
          )}
          </div>
           
            <div class="form-group">
                <label class="form-check-label">Show grid line: <input name="grid-line" type="checkbox" checked='true'/></label>
            </div>
            <div class="form-group">
                <label>Font size:</label>
                <input name="font-size" type="number" value="16" min="16" max="64"/>
            </div>
            <div class="form-group">
                <label>Font align:</label>
                <select name="font-align">
                    <option selected value="left">left</option>
                    <option value="center">center</option>
                    <option value="right">right</option>
                </select>
            </div>
            <div class="form-group">
                <label>Font color:</label>
                 <label>
                  <img src="./img/black.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/white.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/red.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/orange.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/yellow.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/green.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/blue.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/indigo.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/violet.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Background color:</label>
                 <label>
                  <img src="./img/black.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/white.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/red.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/orange.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/yellow.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/green.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/blue.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/indigo.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/transparent.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/violet.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Stroke:</label>
                <input name="font-size" type="number" value="0" min="0" />
            </div>
            <div class="form-group">
                <label>Stroke color:</label>
                 <label>
                  <img src="./img/black.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/white.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/red.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/orange.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/yellow.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/green.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/blue.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/indigo.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
                 <label>
                  <img src="./img/violet.png" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked=""/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Font family:</label>
                <select name="font-family">
                    <option value="serif">serif</option>
                    <option value="sans-serif">sans-serif</option>
                    <option value="cursive">cursive</option>
                    <option value="fantasy">fantasy</option>
                    <option value="monospace">monospace</option>
                    <option value="'Helvetica Neue'">Helvetica Neue</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Arial">Arial</option>
                    <option value="'Dancing Script', cursive">Dancing Script</option>
                    <option selected="" value="FontAwesome,'Helvetica Neue',Helvetica,Arial,sans-serif">FontAwesome,"Helvetica Neue",Helvetica,Arial,sans-serif</option>
                </select>
            </div>
            <div class="form-group">
                <label>Line height:</label>
                <input name="font-size" type="number" value="1.4" min="1.4" max="9.0"  />
                <select name="font-align">
                    <option selected value="em">em</option>
                    <option value="px">px</option>
                </select>
            </div>
      </div>
    </>
  );
}
