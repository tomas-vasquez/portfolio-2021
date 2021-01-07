import Link from "components/Link";
import "./index.css";

const Footer = () => (
  <footer className="footer project__section--light">
    <span className="footer__date">{`© ${new Date().getFullYear()} Tomás Vasquez.`}</span>
    <Link secondary className="footer__link" href="/humans.txt" target="_self">
      Crafted by yours truly
    </Link>
  </footer>
);

export default Footer;
