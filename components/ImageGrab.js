import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
const utils = require('util');
import testpic from '../public/5-L-col.png'

function ImageGrab() {
    const [imagePath, setImagePath] = useState("");
    const [text, setText] = useState("");

    const handleClick = (event) => {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };
        img.src = testpic;

        //setImagePath(URL.createObjectURL(event.target.files[0]));
    };

    const TessRecognize = utils.promisify(Tesseract.recognize);

    const handleChange = async ( url ) => {

        const { data: { text } } = await TessRecognize( url, 'eng', {
            logger: m => console.log(m),
            tessedit_char_whitelist: '0123456789'
        });
        console.log(text);

    };

    return (
        <div className="App">
            <canvas id="myCanvas"></canvas>
                <img id={'test-image'}
                    src={imagePath} className="App-image" alt="logo"/>
                <h3>Extracted text</h3>
                <div className="text-box">
                    <p> {text} </p>
                </div>
                <input type="file" onChange={() => {
                    handleChange(document.getElementById("myCanvas").src).then(data=> console.log(data))}} />
                <button onClick={handleClick} style={{height:50}}> convert to text</button>
        </div>
    );
}

export default ImageGrab
