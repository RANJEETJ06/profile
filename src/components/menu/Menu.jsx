import "./menu.scss";

export default function Menu({ MenuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (MenuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#intro">Home</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#portfolio">Portfolio</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#works">Works</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#about">Knowledge</a>
        </li>
        <li
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
