import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Button } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"

import CardCategory from "../../components/CardCategory";

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <section className="category py-3 overflow-hidden">
        <div className="col-md-12">
          <div className="section-header d-flex flex-wrap justify-content-between mb-2">
            <h2 className="section-title fs-3" style={{fontWeight: 600}}>Category</h2>

            <div className="d-flex align-items-center mb-1">
              <div className="swiper-buttons m-lg-1">
                <Button  color="grey" icon={<FaAngleLeft size={16}/>} style={{margin:"8px"}}/>
                <Button  color="grey" icon={<FaAngleRight size={16}/>} />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("category-content")}>
            <CardCategory />
        </div>
      </section>
    </div>
  )
}

export default Home;