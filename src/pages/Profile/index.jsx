/* eslint-disable no-unused-vars */
import styles from './Profile.module.scss';
import React from 'react';
import classNames from 'classnames/bind';

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
          <table>
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