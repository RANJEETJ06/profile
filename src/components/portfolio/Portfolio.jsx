import { useState } from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfolio-list/Portfoliolist";

export default function Portfolio() {
  const[selected,setSelected]=useState("");
  const list=[
    {
      id:"repositories",
      title:"Repositories",
      link:"https://github.com/RANJEETJ06?tab=repositories"
    },
    {
      id:"system",
      title:"System-App",
      link:"https://github.com/RANJEETJ06/Quiz"
    },
    {
      id:"python",
      title:"Python-Projects",
      link:"https://github.com/RANJEETJ06/PythonProjects"
    },
    {
      id:"web",
      title:"Web-Site",
      link:"https://github.com/RANJEETJ06/Animation"
    }
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <Portfoliolist 
          title={item.title} 
          active={selected === item.id}
          setSelected={setSelected} 
          id={item.id}
          link={item.link}/>
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
