import { useEffect,useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {
  const textref=useRef();
  useEffect(()=>{
    init(textref.current, {
      showCursor: true, 
      backDelay:1500,
      backSpeed:60,
      strings: ["Developer","Java","Python","Typescript","Javascript","ML"], 
    });
  },[]);
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="img" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ranjeet Jena</h1>
          <h3><span ref={textref}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down"/>
        </a>
      </div>
    </div>
  )
}
