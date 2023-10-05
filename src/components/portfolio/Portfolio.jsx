import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./portfolio.scss";
import Portfoliolist from "../portfolio-list/Portfoliolist";

export default function Portfolio() {
  const[selected,setSelected]=useState("");
  let navigate=useNavigate();
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
        navigate("www.youtube.com");
        break;
      default:
        navigate(`www.youtube.com`);
    }
  },[selected,navigate])
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
