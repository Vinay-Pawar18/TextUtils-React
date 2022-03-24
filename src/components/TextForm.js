import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
      //  console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert(" Converted to uppercase", "success")
    }
    const handleClearClick=()=>{
        //  console.log("Clear was clicked");
          let newtext='';
          setText(newtext)
          props.showAlert(" Text cleared", "success")

      }
    const handleLowClick=()=>{
        //  console.log("Lowercase was clicked");
          let newtext=text.toLowerCase();
          setText(newtext)
          props.showAlert(" Converted to lowercase", "success")
      }
      const handleCopy =()=>{
        //console.log("I am copy");
        var text= document.getElementById("myBox"); 
        text.select();
        navigator.clipboard.writeText (text.value);
        props.showAlert(" Copy to clipboard", "success")

      }

      const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);      
        setText (newText.join(" "))
        props.showAlert(" Removed extra spaces", "success")

      }

    const handleOnChange=(event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //const [text, setText] = useState("Enter text here");
    //text="new text"; // Wrong way to change the state
   // setText="new text"; // Coreect way to change the state
return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Conevrt to upercase</button>
        &nbsp;
        <button className="btn btn-primary" onClick={handleLowClick}>Conevrt to lowercase</button>
        &nbsp;
        <button className="btn btn-danger" onClick={handleClearClick}>Clear all</button>
        &nbsp;
        <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
        &nbsp;
        <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008 * text.split(" ").length} Minuter required to read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:"Enter somethings in the textbox above to preview it here"}</p>
   </div>
   </>
)
}
