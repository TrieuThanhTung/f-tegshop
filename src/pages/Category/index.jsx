import CardProduct from "../../components/CardProduct";
import styles from "./Category.module.scss"
import classNames from "classnames/bind";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

const Category = () => {

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