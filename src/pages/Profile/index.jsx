/* eslint-disable no-unused-vars */
import styles from './Profile.module.scss';
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-profile')}>
        <h3 className={cx('header-title')}>My profile</h3>
        <p className={cx('header-description')}>Manage profile to secure account</p>
      </header>
      <div className={cx("container")}>
        <div className={cx("profile")}>
          <table className={cx("profile-table")}>
            <tr>
              <td>First Name</td>
              <td>
                <input type="text" value={'first name'}/>
              </td>
            </tr>
            <tr>
            <td>Last Name</td>
              <td>
                <input type="text" value={'Last name'}/>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td className={cx("change-email")}>
                <p style={{paddingRight: '0.5rem'}}>
                  tung.ttrieu@gmail.com
                </p>
                <Link to={"/change-email"} style={{textDecoration: 'underline'}}>Change</Link>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td className={cx("change-password")}>
                <p style={{paddingRight: '0.5rem'}}>
                  *********
                </p>
                <Link to={"/change-email"} style={{textDecoration: 'underline'}}>Change</Link>
              </td>
            </tr>
            <tr>
              <td>Birthday</td>
              <td>
                <input type="date" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <Button type='primary' size='large' loading={false}>
                  Save
                </Button>
              </td>
            </tr>
          </table>
        </div>
        <div className={cx("avatar")}>
          <img className={cx("image")} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxfiU_TBh7Q18kI7CUAlhDVAEhARbm5gLNg&usqp=CAU" alt="avatar" />
          <div className={cx("input-image")}>
            <label className={cx("custom-input-image")}>
              Chose image
              <input type="file" accept='image/*' />
            </label>
          </div>
          <p>1MB .JPEG, .PNG </p>
        </div>
      </div>
    </div>
  )
}

export default Profile;