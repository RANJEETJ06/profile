import { useState,useEffect} from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfolio-list/Portfoliolist";

export default function Portfolio() {
  const[selected,setSelected]=useState("");
  const list=[
    {
      id:"repositories",
      title:"Repositories"
    },
    {
      id:"system",
      title:"System-App"
    },
    {
      id:"python",
      title:"Python-Projects"
    },
    {
      id:"web",
      title:"Web-Site"
    }
  ];
  useEffect(()=>{
    switch(selected){
      case "repositories":
        console.log("hello")
        break;
      default:
        console.log("hello")
    }
  },[selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <Portfoliolist 
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected} 
          id={item.id}/>
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/github-mark.png" alt="github" />
          <h3><a className="gitpage" href="https://github.com/RANJEETJ06" target="_blank" rel="noopener noreferrer">Ranjeet@github</a></h3>
        </div>
      </div>
    </div>
  )
}
