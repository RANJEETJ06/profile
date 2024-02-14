import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import man from '../../assets/man.png';
import down from '../../assets/down.png';

export default function Intro() {
  const textref = useRef();
  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Developer",
        "Java",
        "Python",
        "Typescript",
        "Javascript",
        "ML",
      ],
    },[]);
  });
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={man} alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ranjeet Jena</h1>
          <h3>
            <span ref={textref}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="down" />
        </a>
      </div>
    </div>
  );
}
