// import React from 'react'
import styles from "./CardCategory.module.scss";
import classNames from "classnames/bind";

import images from "../../assets/images"

const cx = classNames.bind(styles);

import { Link } from "react-router-dom"

const CardCategory = () => {
  const categoryList = [
    {
      title: "Office",
      image: images.categoryOffice
    },
    {
      title: "Games & Graphics",
      image: images.categoryGames
    },
    {
      title: "Apple",
      image: images.categoryApple
    },
    {
      title: "PC",
      image: images.categoryPC
    },
    {
      title: "Monitor",
      image: images.categoryMonitor
    },
    {
      title: "Gears",
      image: images.categoryGear
    },
  ];

  return (
    <>
      {categoryList?.map((category, index) => {
        return (
          <Link key={index} to="/category" className={cx("wrapper")}>
            <img className={cx("image")} src={category.image} alt="" />
            <h3 className={cx("title")}>
              {category.title}
            </h3>
          </Link>
        )
      }
      )}
    </>
  )
}

export default CardCategory