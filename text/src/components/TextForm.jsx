import React, { useState, useEffect, useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import blackImage from './img/black.png';
import whiteImage from './img/white.png';
import redImage from './img/red.png';
import blueImage from './img/blue.png';
import forkmeImage from './img/fork-me.png';
import greenImage from './img/green.png';
import gridlineImage from './img/grid-line.png';
import indigoImage from './img/indigo.png';
import orangeImage from './img/orange.png';
import transparentImage from './img/transparent.png';
import violetImage from './img/violet.png';
import yellowImage from './img/yellow.png';

export default function TextForm(props) {
  const [text, setText] = useState('Enter the Text');
  const [imageUrl, setImageUrl] = useState(null);
  const imageTextRef = useRef(null);
  const [showGrid, setShowGrid] = useState(true); // Default value is true for showing grid lines
  const [fontSize, setFontSize] = useState(16); // Default font size is 16
  const [fontAlign, setFontAlign] = useState('left');
  const [fontColor, setFontColor] = useState('rgba(0,0,0,1)'); 
  const [fontFamily, setFontFamily] = useState(
    'FontAwesome,"Helvetica Neue",Helvetica,Arial,sans-serif'
  );
  const [lineHeight, setLineHeight] = useState('1.4');
  const [strokeColor, setStrokeColor] = useState('rgba(0, 0, 0, 1)');
  const [Color, setColor] = useState('white'); // Default background color

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
  const handleCheckboxChange = (e) => {
    setShowGrid(e.target.checked);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value, 10));
  };
  const handleFontAlignChange = (e) => {
    setFontAlign(e.target.value);
  };
  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleLineHeightChange = (e) => {
    setLineHeight(e.target.value);
  };
  const handleStrokeColorChange = (e) => {
    setStrokeColor(e.target.value);
  };
  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
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
    width: '90%', // Adjust width as needed
    minHeight: '170px', // Set a minimum height to prevent resizing
    paddingTop:'10px',
    marginRight:"30px",
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
    fontSize: `${fontSize}px`,
    border: showGrid ? '1px solid black' : 'none',
    textAlign: fontAlign,
    fontFamily: fontFamily,
    lineHeight: `${lineHeight}${lineHeight.endsWith('em') ? '' : 'px'}`,
     color: fontColor, 
     backgroundColor:  Color,
    textShadow: `0 0 5px ${strokeColor}`,
    stroke: strokeColor,
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
           
          <div className="form-group">
          <label className="form-check-label">
            Show grid line:
            <input
              name="grid-line"
              type="checkbox"
              checked={showGrid}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        
        <div className="form-group">
          <label>Font size:</label>
          <input
            name="font-size"
            type="number"
            value={fontSize}
            min="16"
            max="64"
            onChange={handleFontSizeChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
  <label>Font align:</label>
  <select
    name="font-align"
    value={fontAlign}
    onChange={handleFontAlignChange}
    className="form-control" // Apply Bootstrap form-control class
  >
    <option value="left">Left</option>
    <option value="center">Center</option>
    <option value="right">Right</option>
  </select>
</div>

            <div class="form-group">
                <label>Font color:</label>
                 <label>
                 <img src={blackImage} alt="Black" />
                 <input name="font-color" type="radio" value="rgba(0,0,0,1)" checked={fontColor==='rgba(0,0,0,1)'} onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('rgba(0,0,0,1)')}/> 
                 </label>
                 <label>
                 <img src={whiteImage} alt="white" />
                 <input name="font-color" type="radio" value="white" checked={fontColor==='white'} onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('white')}/> 
                 </label>
                 <label>
                 <img src={redImage} alt="red" />
                 <input name="font-color" type="radio" value="red" checked={fontColor==='red'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('red')}/> 
                 </label>
                 <label>
                 <img src={orangeImage} alt="orange" />
                 <input name="font-color" type="radio" value="orange" checked={fontColor==='orange'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('orange')}/> 
                 </label>
                 <label>
                 <img src={yellowImage} alt="yellow" />
                 <input name="font-color" type="radio" value="yellow" checked={fontColor==='yellow'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('yellow')}/> 
                 </label>
                 <label>
                 <img src={greenImage} alt="green" />
                 <input name="font-color" type="radio" value="green" checked={fontColor==='green'}onChange={handleFontColorChange}
                  onClick={()=>setFontColor===('green')}/> 
                 </label>
                 <label>
                 <img src={blueImage} alt="Blue" />
                 <input name="font-color" type="radio" value="blue" checked={fontColor==='blue'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('blue')}/> 
                 </label>
                 <label>
                 <img src={indigoImage} alt="indigo" />
                 <input name="font-color" type="radio" value="indigo" checked={fontColor==='indigo'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('indigo')}/> 
                 </label>
                 <label>
                 <img src={violetImage} alt="violet" />
                 <input name="font-color" type="radio" value="violet" checked={fontColor==='violet'}onChange={handleFontColorChange}
                 onClick={()=>setFontColor===('violet')}/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Background color:</label>
                 <label>
                 
                 <img src={blackImage} alt="Black" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'black'} onChange={handleFontColorChange}onClick={()=>setColor("black")}/> 
                 </label>
                 <label>
                 <img src={whiteImage} alt="white" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'white'} onChange={handleFontColorChange} onClick={()=>setColor(" white")}/> 
                 </label>
                 <label>
                 <img src={redImage} alt="red" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'red'}  onClick={()=>setColor("red")}/> 
                 </label>
                 <label>
                 <img src={orangeImage} alt="orange" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'orange'}onChange={handleFontColorChange}onClick={()=>setColor("orange")}/> 
                 </label>
                 <label>
                 <img src={yellowImage} alt="yellow" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'yellow'}onChange={handleFontColorChange}onClick={()=>setColor("yellow")}/> 
                 </label>
                 <label>
                 <img src={greenImage} alt="green" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'green'}onChange={handleFontColorChange}onClick={()=>setColor("green")}/> 
                 </label>
                 <label>
                 <img src={blueImage} alt="Blue" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'blue'}onChange={handleFontColorChange}onClick={()=>setColor("blue")}/> 
                 </label>
                 <label>
                 <img src={indigoImage} alt="indigo" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'indigo'}onChange={handleFontColorChange}onClick={()=>setColor("indigo")}/> 
                 </label>
                 <label>
                 <img src={violetImage} alt="violet" />
                 <input name="background-color" type="radio" value="rgba(0,0,0,1)" checked={Color === 'violet'}onChange={handleFontColorChange}onClick={()=>setColor("violet")}/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Stroke:</label>
                <input name="font-size" type="number" value="0" min="0"max="5"  className="form-control" />
            </div>
            <div class="form-group">
                <label >Stroke color:</label>
                <label>
                 <img src={blackImage} alt="Black" />
                 <input name="stroke-color" type="radio" value="rgba(0,0,0,1)" checked={strokeColor==='rgba(0,0,0,1)'} onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("rgba(0,0,0,1)")} /> 
                 </label>
                 <label>
                 <img src={whiteImage} alt="white" />
                 <input name="stroke-color" type="radio" value="white" checked={strokeColor==='white'} onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("white")}/> 
                 </label>
                 <label>
                 <img src={redImage} alt="red" />
                 <input name="stroke-color" type="radio" value="red" checked={strokeColor==='red'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("red")}/> 
                 </label>
                 <label>
                 <img src={orangeImage} alt="orange" />
                 <input name="stroke-color" type="radio" value="orange" checked={strokeColor==='orange'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("orange")} /> 
                 
                 </label>
                 <label>
                 <img src={yellowImage} alt="yellow" />
                 <input name="stroke-color" type="radio" value="yellow" checked={strokeColor==='yellow'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("yellow")}/> 
                 </label>
                 <label>
                 <img src={greenImage} alt="green" />
                 <input name="stroke-color" type="radio" value="green" checked={strokeColor==='green'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("green")}/> 
                 </label>
                 <label>
                 <img src={blueImage} alt="Blue" />
                 <input name="stroke-color" type="radio" value="blue" checked={strokeColor==='blue'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("blue")}/> 
                 </label>
                 <label>
                 <img src={indigoImage} alt="indigo" />
                 <input name="stroke-color" type="radio" value="indigo" checked={strokeColor==='indigo'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("indigo")}/> 
                 </label>
                 <label>
                 <img src={violetImage} alt="violet" />
                 <input name="stroke-color" type="radio" value="violet" checked={strokeColor==='violet'}onChange={handleStrokeColorChange}
                 onClick={()=>setStrokeColor("violet")}/> 
                 </label>
            </div>
            <div class="form-group">
                <label>Font family:</label>
                <select name="font-family"value={fontFamily} onChange={handleFontFamilyChange}className="form-control" >
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
                <input name="font-size" type="number"  value={lineHeight}
                className="form-control" 
          min="1.4"
          max="25.0"
          onChange={handleLineHeightChange}  />
                <select name="font-align">
                    <option selected value="em">em</option>
                    <option value="px">px</option>
                </select>
            </div>
      </div>
    </>
  );
}
