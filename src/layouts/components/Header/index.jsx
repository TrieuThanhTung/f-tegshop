// import React from 'react'
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Input } from 'antd';
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

const cx = classNames.bind(styles);

const { Search } = Input;

const Header = () => {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <header className={cx("wrapper")}>
      <img src="https://demo.templatesjungle.com/foodmart/images/logo.png" alt="" />
      <Search
        placeholder="Search"
        onSearch={onSearch}
        // loading
        style={{
          width: 300,
        }}
      />
      <div className={cx("menu")}>
        <p className={cx("contact-support")}>
          For support: <br/>
          0355529642
        </p>
        <div className="profile-icon">
          <GoPerson size={24}/>
        </div>
        <div className="cart-icon">
          <AiOutlineShoppingCart  size={24}/>
        </div>
      </div>
    </header>
  )
}

export default Header;