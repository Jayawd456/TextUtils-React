import React from 'react'

export default function About(props) {
   /* const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'white',
        border : '1px solid black'
     })*/
   
        let myStyle={
          color:props.mode === 'dark'?'white':'black',
          backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
          
        }
     
  
 


  return (
    <div classNameName="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h1 classNameName="my-3">About Us</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={{ ...myStyle, border: '1px solid' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>Analyze you text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{ ...myStyle, border: '1px solid'}}>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or .</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{ ...myStyle, border: '1px solid',borderTop: '0px solid' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       <strong>Free to use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={{ ...myStyle, border: '1px solid'}}>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/ character limit.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{ ...myStyle, border: '1px solid',borderTop: '0px solid' }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={{ ...myStyle, border: '1px solid'}}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.</div>
    </div>
  </div>
</div>

    </div>
  )
}
