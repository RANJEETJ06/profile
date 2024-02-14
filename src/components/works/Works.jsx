import { useState } from "react";
import "./works.scss";
import arrow from "../../assets/arrow.png";
import writing from "../../assets/writing.png";
import youtube from "../../assets/youtube.png";
import internet from "../../assets/globe.png";

export default function Works() {
  const [currentSlid, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      icon: writing,
      title: "Documentation",
      desc: "Access comprehensive documentation covering a wide range of topics. Explore step-by-step tutorials and technical guides to enhance your development skills and knowledge.",
      img: "https://media.vanguardcommunications.net/blog-e1505840253663.jpg",
    },
    {
      id: "2",
      icon: internet,
      title: "Internet",
      desc: "Navigate the internet with our mobile solutions. Enhance your digital presence with responsive design and develop applications for various platforms.",
      img: "https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg",
    },
    {
      id: "3",
      icon: youtube,
      title: "Youtube Learning",
      desc: "Access videos covering technology, business, and personal development. Join a community of lifelong learners and discover new skills and ideas for development projects.",
      img: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/uploads/2023-04/ee4dadc3-05c6-4a9a-ba66-1b155e41e140.jpg",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlider(currentSlid > 0 ? currentSlid - 1 : 2)
      : setCurrentSlider(currentSlid < data.length - 1 ? currentSlid + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlid * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt={d.title.split(1)} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div> 
              <div className="right">
                <img src={d.img} alt="error" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
