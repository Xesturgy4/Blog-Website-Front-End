import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  
  // use Location to get props if passed to it, and pass them to value state and make textbox eidtable
  
  const [value, setValue] = useState('');

  
  const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ],
  }

  return (
    // Below Form logs out the content of the quil component on clicking submit button, the images are in base64 format

  <form>
    <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} id='quill' />;
  <button onClick={(e)=>{
    e.preventDefault()
    console.log(value)
  }}>Submit</button>
  </form>)
}
