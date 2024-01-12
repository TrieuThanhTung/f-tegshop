import styles from "./Signup.module.scss"
import classNames from "classnames/bind"
import { Input } from 'antd';

const cx = classNames.bind(styles);

const Signup = () => {

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("header fs-1 text-primary mb-6")}>Sign up</h2>
      <form className={cx("container-body")}>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <Input style={{height:"40px", fontSize:"16px"}} placeholder="First Name" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init className="form-outline">
              <Input style={{height:"40px", fontSize:"16px"}} placeholder="Last name" />
            </div>
          </div>
        </div>

        {/* <!-- Email input --> */}
        <div data-mdb-input-init className="form-outline mb-4">
          <Input style={{height:"40px", fontSize:"16px"}} placeholder="Email address" />
        </div>

        {/* <!-- Password input --> */}
        <div data-mdb-input-init className="form-outline mb-4">
          <Input.Password style={{height:"40px", fontSize:"16px"}} placeholder="Password" />
        </div>

        {/* <!-- Submit button --> */}
        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Sign up</button>

        {/* <!-- Register buttons --> */}
        <div className="text-center">
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
  )
}

export default Signup;