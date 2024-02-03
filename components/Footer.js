import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="social-menu">
          <SocialIcon
            network="facebook"
            target="blank"
            bgColor="black"
            url="https://www.facebook.com/trapdoorstudiosUK"
            className="icon"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            network="instagram"
            target="blank"
            bgColor="black"
            url="https://www.instagram.com/tompetersproduction"
            className="icon"
            style={{ height: 30, width: 30 }}
          />
        </div>
        <p className="footer-text">© Trapdoor Studios 2022</p>
        <Link href="http://www.github.com/scoupar">
          <p className="credit">Wesbite by S. Coupar</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
