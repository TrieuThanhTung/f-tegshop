import styles from "./Cart.module.scss"
import classNames from "classnames/bind";

import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Button } from "antd";

const cx = classNames.bind(styles);
const Cart = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img src="https://laptopworld.vn/static/assets/default/images/icon_cart_large.png" alt="" />
        <h3 className={cx("header-title")}>Cart details</h3>
      </div>
      <table className={cx("cart-table")}>
        <tbody>
          <tr className={cx("table-row header")}>
            <td className={cx("table-row-header")} style={{ width: "10%" }}>Order</td>
            <td className={cx("table-row-header")} style={{ width: "50%" }}>Product</td>
            <td className={cx("table-row-header")} style={{ width: "10%" }}>Quantity</td>
            <td className={cx("table-row-header")} style={{ width: "20%" }}>Price</td>
            <td className={cx("table-row-header")} style={{ width: "10%" }}>Remove</td>
          </tr>
          <tr className={cx("table-row")}>
            <td style={{ width: "10%" }}>
              1
            </td>
            <td style={{ width: "50%" }} >
              <div className={cx("title")}>
                <img src="https://laptopworld.vn/media/product/16173_ux3405ma_pp151w_thumber.jpg" alt="" />
                <Link to={"/"}>
                  LG Gram 2023 16Z90R-E.AH75A5 (Core i7-1360P | 16GB | 512GB | RTX 3050 4GB | 16-inch WQXGA | Win 11 | Đen)
                </Link>
              </div>
            </td>
            <td style={{ width: "10%" }}>
              <input className={cx("quantity")} type="text" value={1} />
            </td>
            <td style={{ width: "20%" }}>
              <span className={cx("price")}>
                20.000.000
              </span>
            </td>
            <td style={{ width: "10%" }}>
              <span className={cx("remove")}>
                <IoTrashBinOutline size={24} />
              </span>
            </td>
          </tr>
          <tr className={cx("table-row")}>
            <td className={cx("table-row")} colSpan={2}></td>
            <td className={cx("table-row")} colSpan={3}>
              <b>Total cost: </b>
              <b style={{ color: "red" }}>20.000.000</b>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={cx("btn-cart")}>
        <Link to={"/"}>
          <Button size="large" type="default" style={{ marginRight: 20, fontWeight: 600 }}>
            Add more product
          </Button>
        </Link>
        <Button size="large" type="primary" style={{ marginRight: 20, fontWeight: 600 }}>Continue to checkout</Button>
      </div>
    </div>
  )
}

export default Cart;