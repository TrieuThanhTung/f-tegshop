import { useState } from "react";
import styles from "./Product.module.scss"
import classNames from "classnames/bind";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "antd";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Product = () => {

  const [quantity, setQuantity] = useState(0);
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
  const [options, setOptions] = useState("description");
  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("product-main")}>
        <div className={cx("product-image")}>
          <img src="https://demo.templatesjungle.com/foodmart/images/product-large-5.jpg" alt="" />
        </div>
        <div className={cx("product-content")}>
          <h3 className={cx("product-title")}>Title product</h3>
          <span className={cx("product-price")}> 30.000.000</span>
          <p className={cx("product-description")}>Justo, cum feugiat imperdiet
            nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed
            quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
            cras egestas quam venenatis neque.
          </p>
          <span className={cx("product-category")}>Categroy:
            <Link to={"/apple"} className={cx("link")}>
              {"Apple"}
            </Link>
          </span>
          <span className={cx("product-manufacturer")}>Manufacturer: {"Apple"}</span>
          <span className={cx("product-in-stock")}>
            <i> {2} in stock </i>
          </span>
          <div className={cx("product-in-stock")}>
            <div className={cx("input-quantity")}>
              <button className={cx("input-btn")} onClick={handleMinusInputQuantity}>
                <FaMinus className={cx("star")} size={10} />
              </button>
              <input type="text" name="quantity" value={quantity} className={cx("input-number")} />
              <button className={cx("input-btn")} onClick={handlePlusInputQuantity}>
                <FaPlus className={cx("star")} size={10} />
              </button>
            </div>
            <div>
              <Button size="large" type="primary" style={{ marginRight: 20 }}>Buy now</Button>
              <Button size="large" type="default">Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("product-info")}>
        <div className={cx("product-options")}>
          <button onClick={() => setOptions("description")}
            style={{backgroundColor: options === "description" ? "#f1f1f1" : "#fff"}}
          >
            Description
          </button>
          <button onClick={() => setOptions("feedback")}
            style={{backgroundColor: options === "feedback" ? "#f1f1f1" : "#fff"}}
          >
            Customer feedbacks
          </button>
        </div>
        <div className={cx("product-content")}>
          <div className={cx("product-description")} 
          style={{display: options === "description" ? "block" : "none"}}
          >
            <h4>Product Description</h4>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
            Donec nec justo eget felis facilisis fermentum.
            Suspendisse urna viverra non, semper suscipit pede.
            Aliquam porttitor mauris sit amet orci.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus.
          </div>
          <div className={cx("product-feedback")} 
          style={{display: options === "feedback" ? "block" : "none"}}
          >
            {"No feedback"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;