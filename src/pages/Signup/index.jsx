import { useState } from "react";
import styles from "./Signup.module.scss"
import classNames from "classnames/bind"
import { Input } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import AuthenticationApi from "../../api/AuthenticationApi";

const cx = classNames.bind(styles);

const Signup = () => {
  const navigate = useNavigate();

  const [signupData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    password: '',
    confirmPassword: ''
  })

  const handleChangeSignupData = (event) => {
    setSignUpData({
      ...signupData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    if(signupData.password !== signupData.confirmPassword) {
      toast("Password and Confirm password aren't same", {
        type: "error"
      })
      setSignUpData({
        ...signupData,
        password: '',
        confirmPassword: ''
      })
      return;
    }

    const formData = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      emailId: signupData.emailId,
      password: signupData.password
    }

    try {
      const response = await AuthenticationApi.signup(formData);
      if(response.message === "Token confirm is sent to your email." +
      " Please USE it in 30 minutes to confirm registration.") {
        toast(response.message, {
          type: "success"
        })
        setTimeout(() => {
          navigate('/verify-register')
        }, 2500)
      } else {
        toast(response.message, {
          type: "error"
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
      />
      <div className={cx("wrapper")}>
        <h2 className={cx("header fs-1 text-primary mb-6")}>Sign up</h2>
        <form className={cx("container-body")}>
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <Input onChange={event => handleChangeSignupData(event)} value={signupData.firstName} style={{height:"40px", fontSize:"16px"}} name="firstName" placeholder="First Name" />
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <Input onChange={event => handleChangeSignupData(event)} value={signupData.lastName} style={{height:"40px", fontSize:"16px"}} name="lastName" placeholder="Last name" />
              </div>
            </div>
          </div>
  
          {/* <!-- Email input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <Input onChange={event => handleChangeSignupData(event)} value={signupData.emailId} style={{height:"40px", fontSize:"16px"}} name="emailId" placeholder="Email" />
          </div>
  
          {/* <!-- Password input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <Input.Password onChange={event => handleChangeSignupData(event)} value={signupData.password} style={{height:"40px", fontSize:"16px"}} name="password" placeholder="Password" />
          </div>
  
          <div data-mdb-input-init className="form-outline mb-4">
            <Input.Password onChange={event => handleChangeSignupData(event)} value={signupData.confirmPassword} style={{height:"40px", fontSize:"16px"}} name="confirmPassword" placeholder="Confirm Password" />
          </div>
  
          {/* <!-- Submit button --> */}
          <button data-mdb-ripple-init type="button" onClick={handleSubmitSignUp} className="btn btn-primary btn-block mb-4">Sign up</button>
  
          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Has a account? <Link to="/login">Login</Link></p>
            <p>or sign up with:</p>
            <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>
  
            <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>
  
            <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
  
            <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup;