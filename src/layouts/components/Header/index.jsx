// import React from 'react'
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Input, Button } from 'antd';
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
        <Button size="large" 
        color="grey" 
        shape="circle" 
        icon={<GoPerson size={24} className="profile-icon"/>} 
        />
        <Button size="large"
         color="grey" 
         shape="circle" 
         icon={<AiOutlineShoppingCart className="cart-icon" size={24}/>} 
         />
      </div>
    </header>
  )
}

export default Header;