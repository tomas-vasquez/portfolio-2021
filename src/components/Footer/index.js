import "./index.css";

const Footer = () => (
  <footer className="footer project__section--light">
    <span className="footer__date">{`© ${new Date().getFullYear()} Tomás Vasquez.`}</span>
  </footer>
);

export default Footer;
