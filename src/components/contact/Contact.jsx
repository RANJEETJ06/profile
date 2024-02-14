import { useState } from "react";
import "./contact.scss";
import shake from "../../assets/shake.svg";
import api from "../../axiosConfig";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/v1/", {
        email: email,
        para: messageText,
      });
      if (response.status===201) {
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
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="img" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSumit}>
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks,i will replay Soon.. ;)</span>}
        </form>
        <div className="footer">
          <>© 2024 Ranjeet. All Rights Reserved.</>
        </div>
      </div>
    </div>
  );
}
