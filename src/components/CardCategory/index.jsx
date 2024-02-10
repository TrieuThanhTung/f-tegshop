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
      image: images.categoryOffice,
      params: 'office'
    },
    {
      title: "Games & Graphics",
      image: images.categoryGames,
      params: "games"
    },
    {
      title: "Apple",
      image: images.categoryApple,
      params: "apple"
    },
    {
      title: "PC",
      image: images.categoryPC,
      params: "pc"
    },
    {
      title: "Monitor",
      image: images.categoryMonitor,
      params: "monitor"
    },
    {
      title: "Gear",
      image: images.categoryGear,
      params: "gear"
    },
  ];

  return (
    <>
      {categoryList?.map((category, index) => {
        return (
          <Link key={index} to={`/category/${category.params}?page=1`}className={cx("wrapper")}>
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