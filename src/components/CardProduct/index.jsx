/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import styles from "./CardProduct.module.scss";
import classNames from "classnames/bind";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

const cx = classNames.bind(styles);

const CardProduct = ({id, image, title, proQuantity, price}) => {
  const [quantity, setQuantity] = useState(0);
  const [productPrice, setProdutPrice] = useState(
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price || 20000000)
    );

  const handleMinusInputQuantity = (event) => {
    event.preventDefault();
    let tq = quantity - 1;
    if (tq <= 0) {
      tq = 0;
    }
    setQuantity(tq);
  }
  const handlePlusInputQuantity = (event) => {
    event.preventDefault();
    let tq = quantity + 1;
    if (tq >= 100) {
      tq = 99;
    }
    setQuantity(tq);
  }

  return (
    <div className={cx("wrapper")}>
      <figure >
        <Link to={`/product/${id}`} title={"title - product"}>
          <img src={image || "src/assets/images/laptop_default.jpg"} alt="" />
        </Link>
      </figure>
      <h3 className={cx("title-product")}>
        <Link to={`/product/${id}`} className={cx("text")}>{title || "NAME PRODUCT"}</Link>
      </h3>
      <div className={cx("quantity-rating")}>
        <span className={cx("quantity")}>{proQuantity || 10} unit</span>
        <span className={cx("rating")}>
          <FaStar className={cx("star")} size={16} />
          {(Math.random() + 4).toFixed(1)}
        </span>
      </div>
      <span className={cx("price")}>{productPrice}</span>
      <div className={cx("add-to-cart")}>
        <div className={cx("input-quantity")}>
          <button className={cx("input-btn")} onClick={handleMinusInputQuantity}>
            <FaMinus className={cx("star")} size={10} />
          </button>
          <input type="text" name="quantity" value={quantity} className={cx("input-number")} />
          <button className={cx("input-btn")} onClick={handlePlusInputQuantity}>
            <FaPlus className={cx("star")} size={10} />
          </button>
        </div>
        <span className={cx("add-card")}>
          <a href="" title="Add to cart">
            <AiOutlineShoppingCart size={24} />
          </a>
        </span>
      </div>
    </div>
  )
}

export default CardProduct;