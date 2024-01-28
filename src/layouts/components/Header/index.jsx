// import React from 'react'
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Input, Button } from 'antd';
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const { Search } = Input;

const Header = () => {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("image")}>
        <Link to={"/"}>
          <img src="src\assets\images\logo-tegshop1.png" alt="" height={40} />
        </Link>
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
        <Link to={"/"}>
          <Button size="large"
            color="grey"
            shape="circle"
            icon={<GoPerson size={24} className="profile-icon" />}
          />
        </Link>
        <Link to={"/cart"}>
          <Button size="large"
            color="grey"
            shape="circle"
            icon={<AiOutlineShoppingCart className="cart-icon" size={24} />}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header;