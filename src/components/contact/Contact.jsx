import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const baseUrl = process.env.REACT_APP_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValid) return;
    try {
      const response = await axios.post(`${baseUrl}/api/v1/`, {
        email: email,
        para: messageText,
      });
      if (response.status === 201) {
        setMessage(true);
        setEmail("");
        setMessageText("");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.validity.valid);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="img" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          {emailValid ? null : <span className="invalid">Invalid Email*</span>}
          <input
            type="email"
            placeholder="Email..."
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: emailValid ? "initial" : "red" }}
            required
          />
          <textarea
            placeholder="Message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply soon! ;)</span>}
        </form>
        <div className="footer">
          <>© 2024 Ranjeet. All Rights Reserved.</>
        </div>
      </div>
    </div>
  );
}
