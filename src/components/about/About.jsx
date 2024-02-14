import "./About.scss";
import spring from "../../assets/springboot.png";
import react from "../../assets/react.png";
import apiImg from "../../assets/apiImg.png";

const About = () => {
  const data = [
    {
      id: 1,
      name: "ReactJS",
      title: "JavaScript & TypeScript",
      icon: react,
      desc: "ReactJS is a JavaScript library for building user interfaces, commonly used for creating interactive and dynamic web applications. It allows developers to efficiently manage the UI components and state of their applications, resulting in faster and more responsive user experiences.",
    },
    {
      id: 2,
      name: "SpringBoot",
      title: "Java",
      icon: spring,
      desc: "Spring Boot is a powerful framework for building Java-based web applications and microservices. It provides developers with a streamlined development experience, offering features like auto-configuration, dependency injection, and production-ready setups out of the box.",
      fetured: true,
    },
    {
      id: 3,
      name: "API Development",
      title: "Java & NodeJS",
      icon: apiImg,
      desc: "API Development involves designing, building, and deploying application programming interfaces (APIs) to enable communication and data exchange between different software systems. Using Java or Node.js, developers can create scalable and secure APIs.",
    },
  ];
  return (
    <div className="about" id="about">
      <h1>Knowledge</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.fetured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.icon} className="left" alt="error" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
