import CardProduct from "../../components/CardProduct";
import styles from "./Category.module.scss"
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import ProductApi from "../../api/ProductApi";
import { useEffect, useState } from "react";


const cx = classNames.bind(styles);

const Category = () => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductApi.getAllProduct();
        setListProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, []); 
  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-category-page")}>
        <label> Sort by: </label>
        <select id="sort-product">
          <option className={cx("sort-options")} value="nomal">Nomal</option>
          <option value="price">Price from high to low</option>
          <option value="price">Price from low to high</option>
          <option value="date">Date arrived</option>
        </select>
      </div>
      <div className={cx("list-product")}>
        { listProducts.map((product, index) => 
          <CardProduct key={index} 
            id={product.productId}
            image={product.images[0]} 
            title={product.productName}
            proQuantity={product.quantity}
            price={product.price}
          />
        )}
      </div>
      <div className={cx("bottom-category-page")}>
        <div className={cx("paging")}>
          <Link className={cx("paging-number")}>1</Link>
          <Link>2</Link>
          <Link>3</Link>
          <Link>4</Link>
          <Link>Next</Link>
        </div>
      </div>
    </div>
  )
}

export default Category;