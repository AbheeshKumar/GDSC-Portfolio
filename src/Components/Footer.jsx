import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <i className="header-name-text">Abheesh K</i>
      </div>
      <div className="footer-icons">
        <a href="">
          <FaFacebook color="white" />
        </a>
        <a href="">
          <FaTwitter color="white" />
        </a>
        <a href="">
          <FaYoutube color="white" />
        </a>
      </div>
      <div className="footer-creation">
        <h3>Created for GDSC</h3>
      </div>
    </div>
  );
};

export default Footer;
