import styles from "./Login.module.scss"
import classNames from "classnames/bind"
import { Input } from 'antd';
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../config/axios";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Login = () => {
  const [isRememberMe, setRememberMe] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChangeLoginData = (event) => {

    event.preventDefault();

    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmitLogin = async (event) => {
    event.preventDefault();

    const formData = {
      emailId: loginData.email,
      password: loginData.password
    };

    try {
      const response = await axiosInstance.post("/api/auth/login", formData);
      console.log("login", response);

      if(response.message === "Login successfully") {
        toast(response.message, {
          type: "success"
        });
      } else {
        toast(response.message, {
          type: "error"
        });
      }
    } catch (error) {
      console.log(error);
      toast(error.data.message, {
        type: "error"
      });
    }
  }

  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={2000}
      />
      <div className={cx("wrapper")}>
  
        <h2 className={cx("header fs-1 text-primary mb-6")}>Log in</h2>
        <form>
          {/* <!-- Email input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <Input type="email" onChange={handleChangeLoginData} value={loginData.email} style={{ height: "40px", fontSize: "16px", width: "400px" }} name="email" placeholder="Email" />
          </div>
  
          {/* <!-- Password input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
            <Input.Password onChange={handleChangeLoginData} value={loginData.password} style={{ height: "40px", fontSize: "16px", width: "400px" }} name="password" placeholder="Password" />
          </div>
  
          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input className="form-check-input" onChange={() => setRememberMe(!isRememberMe)} type="checkbox" value="" id="form2Example34" checked = {isRememberMe} />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>
  
            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
  
          {/* <!-- Submit button --> */}
          <button onClick={handleSubmitLogin} data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
  
          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Not a member? <Link to="/signup">Register</Link></p>
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

export default Login;