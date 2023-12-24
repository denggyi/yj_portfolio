import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';


function Header() {
  const location = useLocation();
  const resumeLink = "https://drive.google.com/file/d/1Z_MDNp0_rnHw96UO_P7EmBO5B--bVbk2/view"; 

  return (
    <header className="header">
      <nav>
        <div className="header-content">
          <ul className="nav-links">
            <li className={location.pathname === "/" ? "active" : ""}>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <ScrollLink to="scroll-point" smooth={true} duration={700}>About</ScrollLink>
            </li>
            <li className={location.pathname === "/projects" ? "active" : ""}>
              <RouterLink to="/projects">Projects</RouterLink>
            </li>
            <li className={location.pathname === "/blogs" ? "active" : ""}>
              <RouterLink to="/blogs">Blog</RouterLink>
            </li>
            <li className={location.pathname === "/resume" ? "active" : ""}>
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
