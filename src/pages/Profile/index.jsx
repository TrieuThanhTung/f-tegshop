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
          <h1>avatar</h1>
        </div>
      </div>
    </div>
  )
}

export default Profile;