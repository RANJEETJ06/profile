import { useState } from "react";
import "./works.scss";

export default function Works() {
  const[currentSlid,setCurrentSlider]=useState(0)
  const data = [
      {
        id:"1",
        icon:"assets/writing.png",
        title:"blog",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ametut necessitatibus cum.Animi, praesentium quasi! Dolores eosullam sequi sapiente",
        img:"https://media.vanguardcommunications.net/blog-e1505840253663.jpg"
      },
      {
        id:"2",
        icon:"assets/mobile.png",
        title:"Mobile Application",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ametut necessitatibus cum.Animi, praesentium quasi! Dolores eosullam sequi sapiente",
        img:"https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg"
      },
      {
        id:"3",
        icon:"assets/youtube.png",
        title:"Youtube",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ametut necessitatibus cum.Animi, praesentium quasi! Dolores eosullam sequi sapiente",
        img:"https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-04/ee4dadc3-05c6-4a9a-ba66-1b155e41e140.jpg"
      }
  ];
  const handleClick= (way)=>{
    way === "left" ? 
    setCurrentSlider(currentSlid > 0 ? currentSlid - 1:2): 
    setCurrentSlider(currentSlid < data.length - 1 ? currentSlid + 1:0)
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlid*100}vw)`}}>
      {data.map(d=>(
        <div className="container">
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="#img" />
              </div>
              <h2>{d.title}</h2>
              <p>
                {d.desc}
              </p>
              <span>Projects</span>
            </div>
          </div>
          <div className="right">
            <img
              src={d.img}              
              alt="error"
            />
          </div>
        </div>
      </div>
      ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={()=>handleClick()}/>
    </div>
  );
}
