import styles from "./Home.module.scss";
import classNames from "classnames/bind";
// import { Button } from "antd";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

import CardCategory from "../../components/CardCategory";
import CardProduct from "../../components/CardProduct";
// import { useRef, useState } from "react";
// import images from "../../assets/images"

const cx = classNames.bind(styles);

const Home = () => {
  // const categoryList = [
  //   {
  //     title: "Office",
  //     image: images.categoryOffice
  //   },
  //   {
  //     title: "Games & Graphics",
  //     image: images.categoryGames
  //   },
  //   {
  //     title: "Apple",
  //     image: images.categoryApple
  //   },
  //   {
  //     title: "PC",
  //     image: images.categoryPC
  //   },
  //   {
  //     title: "Monitor",
  //     image: images.categoryMonitor
  //   },
  //   {
  //     title: "Gears",
  //     image: images.categoryGear
  //   },
  // ];

  return (
    <div className={cx("wrapper")}>
      <div className="banner">
        <img src="https://laptopworld.vn/media/banner/xkhonttmlch-01.jpg" alt="" width={1280} />
      </div>
      <section className="category py-3">
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-content-between mb-2">
            <h2 className="section-title fs-4" style={{ fontWeight: 600, lineHeight: "52px" }}>Category</h2>
          </div>
        </div>
        <div className={cx("category-content")}>
          <CardCategory />
        </div>
      </section>
      <section className={cx("trending py-3")}>
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-content-between mb-2">
            <h2 className="section-title fs-4" style={{ fontWeight: 600, lineHeight: "52px" }}>Trending products</h2>

            <div className="d-flex align-items-center mb-1">
              <div className="swiper-buttons m-lg-1">
                {/* <Button  color="grey" disabled icon={<FaAngleLeft size={16}/>} style={{margin:"8px"}} />
                <Button color="grey" icon={<FaAngleRight size={16}/>} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
      <section className={cx("best-selling py-3")}>
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-content-between mb-2">
            <h2 className="section-title fs-4" style={{ fontWeight: 600, lineHeight: "52px" }}>Best selling products</h2>

            <div className="d-flex align-items-center mb-1">
              <div className="swiper-buttons m-lg-1">
                {/* <Button  color="grey" disabled icon={<FaAngleLeft size={16}/>} style={{margin:"8px"}} />
                <Button color="grey" icon={<FaAngleRight size={16}/>} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
      <section className={cx("just-arrived py-3")}>
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-content-between mb-2">
            <h2 className="section-title fs-4" style={{ fontWeight: 600, lineHeight: "52px" }}>Just arrived</h2>

            <div className="d-flex align-items-center mb-1">
              <div className="swiper-buttons m-lg-1">
                {/* <Button  color="grey" disabled icon={<FaAngleLeft size={16}/>} style={{margin:"8px"}} />
                <Button color="grey" icon={<FaAngleRight size={16}/>} /> */}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("product")}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
    </div>
  )
}

export default Home;