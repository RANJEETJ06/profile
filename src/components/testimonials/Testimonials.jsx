import "./testimonials.scss";
import PersonIcon from "@mui/icons-material/Person";

export default function Testmonials() {
  const data = [
    {
      id: 1,
      name: "Amritansu Meher",
      title: "Co-Founder of Lambda",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis suscipit minus officiis? Quia aliquid."
    },
    {
      id: 2,
      name: "Manoj Giri",
      title: "CEO of Lambda",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis suscipit minus officiis? Quia aliquid.",
      fetured: true
    },
    {
      id: 3,
      name: "Ayush Mohanty",
      title: "Professor in GETi",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis suscipit minus officiis? Quia aliquid."
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(d=>(
          <div className={d.fetured ? "card featured":"card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="error" />
            <PersonIcon className="icon" sx={{ fontSize: 80 }} />
            <img src={d.icon} alt="error" className="youtube" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
