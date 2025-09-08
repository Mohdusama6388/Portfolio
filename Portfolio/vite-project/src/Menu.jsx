import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Menu.module.css";
import Profile from './assets/image.png';

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header className={Style.header}>
      <nav>
        <div className={Style.hamburger} onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>


        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <img
            src={Profile}
            alt="Usama"
            className={Style.profileImg}
            style={{ height: "60px", width: "60px", borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
            <span style={{ fontSize: "1.3rem", color: "white" }}>Usama</span>
            <span style={{ fontSize: "1rem", color: "white" }}>MERN Stack Developer</span>
          </div>
        </div>
        <ul >
          <li ><Link to="/">Profile</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li><Link to="/Resume">Education</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>

        <div className={`${Style.sidebar} ${sidebar ? Style.active : ""}`}>

          <img
            src={Profile}
            alt="Usama"
            className={Style.profileImg}
            style={{ height: "120px", width: "120px", borderRadius: "50%" }}
          />
          <li><Link to="/" onClick={toggleSidebar}>Profile</Link></li>
          <li><Link to="/About" onClick={toggleSidebar}>About</Link></li>
          <li><Link to="/Skills" onClick={toggleSidebar}>Skills</Link></li>
          <li><Link to="/Resume" onClick={toggleSidebar}>Education</Link></li>
          <li><Link to="/Projects" onClick={toggleSidebar}>Projects</Link></li>
          <li><Link to="/Contact" onClick={toggleSidebar}>Contact Us</Link></li>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
