import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('');

    const textHandler = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        setText('');
        props.showAlert('Your Text has been cleared!', 'success');
    }

    const convertToUpparCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Your Text has been converted to Uppar-Case!', 'success');
    }
    
    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Your Text has been converted to Lower-Case!', 'success');
    }
    
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Your Text has been copied to Clipboard!', 'success');
    }
    
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra space have been removed!', 'success');
    }
    
    let styleComponent = {
        background: "#212529",
        color: "aliceblue"
    }

    return (
        <>
            <div className="mb-3 my-3">
                <h2>{props.heading}</h2>
                <textarea style={styleComponent} className="form-control" autoFocus placeholder='Enter text here' value={text} onChange={textHandler} id="mybox" rows={props.size}></textarea>
            </div>
            <div className="container">
                <button className='btn btn-primary mx-1 my-1' onClick={convertToUpparCase}>Convert to UpparCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={convertToLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove extra spaces</button>
                <button className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear</button>
            </div>
            <div className="container">
                <h1 className='my-3'>Your Text Summary</h1>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read.</p>
            </div>
        </>
    )
}

export default TextForm