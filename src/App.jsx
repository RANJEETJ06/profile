import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import About from "./components/about/About";

function App() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      <Menu MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <About />
        <Contact />
        {console.log("Hello")}
      </div>
    </div>
  );
}

export default App;
