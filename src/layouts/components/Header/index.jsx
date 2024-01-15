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
      <div className={cx("image")}>
        <img src="src\assets\images\logo-tegshop1.png" alt="" height={40}/>
      </div>
      <Search
        placeholder="Search"
        onSearch={onSearch}
        // loading
        style={{
          width: 400
        }}
        size="large"
      />
      <div className={cx("menu")}>
        <div className={cx("menu-icon")}>
          <GoPerson size={24} className="profile-icon"/>
        </div>
        <span className={cx("menu-icon")}>
          <AiOutlineShoppingCart className="cart-icon" size={24}/>
        </span>
      </div>
    </header>
  )
}

export default Header;