// import React from 'react'
import styles from "./CardCategory.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

import { Link } from "react-router-dom"

const CardCategory = () => {
  return (
    <Link to="" className={cx("wrapper")}>
      <img className={cx("image")} src="src\assets\images\office.png" alt="" />
      <h3 className={cx("title")}>
        Office
      </h3>
    </Link>
  )
}

export default CardCategory