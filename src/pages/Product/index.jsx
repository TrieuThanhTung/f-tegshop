/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styles from "./Product.module.scss"
import classNames from "classnames/bind";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import ProductApi from "../../api/ProductApi";

const cx = classNames.bind(styles);

const Product = () => {
  const params = useParams();

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


  const [product, setProduct] = useState({
    productName: 'productname',
    price: 20000000,
    description: ['des1', 'des2'],
    category: 'CATEGORY',
    manufacturer: 'DELL',
    quantity: 10,
    images: ['src/assets/images/laptop_default.jpg']
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductApi.getProductById(params.id);
      console.log(response.data);
      setProduct(response.data);
    }

    fetchData();
  }, [params.id])

  return (
    <div className={cx("wrapper")}>
      <div className={cx("product-main")}>
        <div className={cx("product-image")}>
          <img src={product?.images?.[0] || "src/assets/images/laptop_default.jpg"} alt="" />
        </div>
        <div className={cx("product-content")}>
          <h3 className={cx("product-title")}>{product?.productName || "Title product"}</h3>
          <span className={cx("product-price")}> {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.price)}</span>
          <div className={cx("product-description")}>

          </div>
          <span className={cx("product-category")}>Categroy:
            <Link to={"/category"} className={cx("link")}>
              {product?.category || "Apple"}
            </Link>
          </span>
          <span className={cx("product-manufacturer")}>Manufacturer: {product?.manufacturer || "Apple"}</span>
          <span className={cx("product-in-stock")}>
            <i> {product?.quantity} in stock </i>
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
            style={{ backgroundColor: options === "description" ? "#f1f1f1" : "#fff" }}
          >
            Description
          </button>
          <button onClick={() => setOptions("feedback")}
            style={{ backgroundColor: options === "feedback" ? "#f1f1f1" : "#fff" }}
          >
            Customer feedbacks
          </button>
        </div>
        <div className={cx("product-content")}>
          <div className={cx("product-description")}
            style={{ display: options === "description" ? "block" : "none" }}
          >
            <h4>Product Description</h4>
            {product?.description.map((text, index) => {
              return (
                <p key={index}>
                  {text}
                </p>
              )
            })}
          </div>
          <div className={cx("product-feedback")}
            style={{ display: options === "feedback" ? "block" : "none" }}
          >
            {"No feedback"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;