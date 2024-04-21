import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Akshay Pratap Singh.</div>
      <div>
        <Link to={"https://www.facebook.com/akshay.pratap.1257"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/aps007/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/akshay_pratap_singh_007/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
