import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const[message,setMessage]=useState(false);
  const handleSumit=(e)=>{
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="img" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSumit}>
          <input type="text" placeholder="Email..."/>
          <textarea placeholder="Message..."></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks,i will replay Soon.. ;)</span>}
        </form>
      </div>
    </div>
  )
}
