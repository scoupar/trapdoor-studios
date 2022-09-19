import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="footer-text">© Trapdoor Studios 2022</p>
        <div className="social-menu">
          <SocialIcon
            network="facebook"
            target="blank"
            bgColor="white"
            url="https://www.facebook.com/trapdoorstudiosUK"
            className="icon"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            network="instagram"
            target="blank"
            bgColor="white"
            url="https://www.instagram.com/tompetersproduction"
            className="icon"
            style={{ height: 30, width: 30 }}
          />
        </div>
        <Link href="http://www.github.com/scoupar">
          <p className="credit">Wesbite by S. Coupar</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
