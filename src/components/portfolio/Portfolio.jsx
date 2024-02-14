import { useState } from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfolio-list/Portfoliolist";
import git from "../../assets/github-mark.png";
import linkedin from "../../assets/linkedin.png";

export default function Portfolio() {
  const [selected, setSelected] = useState("");
  const list = [
    {
      id: "repositories",
      title: "Repositories",
      link: "https://github.com/RANJEETJ06?tab=repositories",
    },
    {
      id: "quiz",
      title: "Quiz-App",
      link: "https://github.com/RANJEETJ06/Quiz",
    },
    {
      id: "task",
      title: "Task-Management",
      link: "https://github.com/RANJEETJ06/Task-Management",
    },
    {
      id: "expense",
      title: "Expense-Tracker",
      link: "https://github.com/RANJEETJ06/Expense-Tracker",
    },
    {
      id: "python",
      title: "Python-Projects",
      link: "https://github.com/RANJEETJ06/PythonProjects",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <div className="item-card">
            <img src={git} alt="github" />
            <h3>
              <a
                className="gitpage"
                href="https://github.com/RANJEETJ06"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ranjeet@github
              </a>
            </h3>
          </div>
          <div className="item-card">
            <img src={linkedin} alt="github" />
            <h3>
              <a
                className="gitpage"
                href="https://www.linkedin.com/in/ranjeet-jena-309ba4239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ranjeet@LinkedIn
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
