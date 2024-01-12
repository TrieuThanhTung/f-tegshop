import styles from "./ConfirmRegistration.module.scss"
import { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind"
import { ToastContainer, toast } from "react-toastify";

import AuthenticationApi from "../../api/AuthenticationApi";

const cx = classNames.bind(styles);

const ConfirmRegistration = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState('');

  const handleSubmitVerifyRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await AuthenticationApi.verifyRegister(token);
      if(response.message === "Register successfully") {
        toast(response.message, {
          type: "success"
        })
        setTimeout(() => {
          navigate('/login');
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
        autoClose="2000"
      />
      <div>
        <h2 className={cx("header fs-1 text-primary mb-6")}>Comfirm registration</h2>
        <form className={cx("container-body")}>
          <div data-mdb-input-init className="form-outline mb-4">
            <Input onChange={event => setToken(event.target.value)} style={{height:"40px", fontSize:"16px"}} value={token} placeholder="Token" />
          </div>
  
          <button data-mdb-ripple-init type="button" onClick={handleSubmitVerifyRegister} className="btn btn-primary btn-block mb-4">Submit</button>
  
          <div className="text-center">
            <p>Back to sign up? <Link to="/signup">Sign up</Link></p>
          </div>
        </form>
      </div>
    </>
  )
}

export default ConfirmRegistration;