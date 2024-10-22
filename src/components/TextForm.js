import React, {useState} from 'react'




export default function TextForm(props) {
const handleUpClick = ()=>{
  //console.log ("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase !" , "success");
  
}
const handleLpClick = ()=>{
  //console.log ("LowerCase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lowercase !" , "success");
}
const handleClClick = ()=>{
  //console.log ("Clear text was clicked" + text);
  let newText = ("");
  setText(newText)
  props.showAlert("Text is cleared!" , "success");
}
const handleReClick = ()=>{
  //console.log ("Remove extra space was clicked" + text);
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra space is removed!" , "success");
}

const handleOnchange = (event)=>{
  //console.log ("On Change");
  setText(event.target.value);
}

  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container" style = {{color: props.mode === 'dark' ? 'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} style = {{backgroundColor: props.mode === 'dark' ? '#13466e':'white' , color: props.mode === 'dark' ? 'white':'#042743'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert Uppercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLpClick}>Convert lowercase</button>
<button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
<button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleReClick}>Remove Extra Space</button>

    </div>
    <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
      <p>Preview</p>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
