/* eslint-disable no-unused-vars */
import styles from './Profile.module.scss';
import React, {useEffect, useState} from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import UserApi from '../../api/UserApi';

const cx = classNames.bind(styles);

const Profile = () => {
  const [user, setUser] = useState({
    firstName: 'First name',
    lastName: 'Last name',
    email: 'email@email.com',
    birthDay: '2003-04-26'
  })

  useEffect(() => {
    const getData = async () => {
      const response = await UserApi.getUserProfile();
      console.log('Get response user: ', response);
      setUser({ ...user,
        firstName: response.data?.firstName,
        lastName: response.data?.lastName,
        email: response.data?.emailId
      });
    } 

    getData();
  }, [])

  console.log(user)

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
                <input type="text" value={user.firstName}/>
              </td>
            </tr>
            <tr>
            <td>Last Name</td>
              <td>
                <input type="text" value={user.lastName}/>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td className={cx("change-email")}>
                <p style={{paddingRight: '0.5rem'}}>
                  {user.email?.substring(0, 2) + '******@gmail.com'}
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
                <input type="date" value={user.birthDay}/>
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