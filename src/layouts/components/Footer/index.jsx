// import React from 'react'
import classNames from "classnames/bind";
import styles from "./Footer.module.scss"

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa6";

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx("wrapper")}>
      <div>
        <div className={cx("image")}>
          <img src="src\assets\images\logo-tegshop1.png" alt="" height={40} />
        </div>
        <p className={cx("contact-email")}>
          Contact: tung.ttrieu@gmail.com
        </p>
      </div>
      <div className={cx("container-icon")}>
        <span className={cx("contact-icon")}>
          <a href="https://www.facebook.com/tung.ttrieu26">
            <FaFacebook size={24} color="#747474"/>
          </a>
        </span>
        <span className={cx("contact-icon")}>
          <a href="https://github.com/TrieuThanhTung">
            <FaGithub size={24} color="#747474"/>
          </a>
        </span>
        <span className={cx("contact-icon")}>
          <a href="https://www.linkedin.com/in/tungttrieu/">
            <FaLinkedin size={24} color="#747474"/>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;