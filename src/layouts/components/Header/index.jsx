// import React from 'react'
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
// import { useState } from "react";
import { Input, Button } from 'antd';
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles);

const { Search } = Input;

const Header = () => {

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  // const [hiddenPopDown, sethiddenPopDown] = useState(true);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("image")}>
        <Link to={"/"}>
          <img src="src\assets\images\logo-tegshop1.png" alt="LOGO" height={40} />
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
        <div className={cx("profile")}>
          <Link to={"/profile"}>
            <Button size="large"
              color="grey"
              shape="circle"
              icon={<GoPerson size={24} className="profile-icon" />}
            />
          </Link>
          <div className={cx("pop-down")} >
            <Link to={'/profile'}>
              <Button type="primary" size="large"
                color="grey"
                className={cx("button")}
              >
                Profile
              </Button>
            </Link>
            <Link to={'/login'}>
              <Button danger size="large"
                className={cx("button")}
              >
                Log out
              </Button>
            </Link>
          </div>
        </div>
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