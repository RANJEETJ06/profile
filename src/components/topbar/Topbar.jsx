import "./topbar.scss";
import EmailIcon from "@mui/icons-material/Email";

export default function Topbar({ MenuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (MenuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            rjk.
          </a>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>jenarahul966@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!MenuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
