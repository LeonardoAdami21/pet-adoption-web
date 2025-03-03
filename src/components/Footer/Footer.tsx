import "../../App.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

interface FooterProps {
  title: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="mailto:leonardorossato21@gmail.com">
            leonardorossato21@gmail.com
          </a>
        </p>
        <p>
          <a
            className="contact-links"
            href="https://www.linkedin.com/in/leonardo-adami-rossato-rodrigues-670704125/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square"></i> Linkedin
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className="contact-links"
            href="https://github.com/LeonardoAdami21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i> GitHub
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        
        </p>
        <p>&copy; 2025 Leonardo Adami</p>
      </div>
    </footer>
  );
};

export default Footer;
