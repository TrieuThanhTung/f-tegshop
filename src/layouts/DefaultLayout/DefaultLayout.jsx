/* eslint-disable react/prop-types */
// import React from 'react'
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
import Header from "../components/Header"
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        {children}
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
     
    </div>
  )
}

export default DefaultLayout;