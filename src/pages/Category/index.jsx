/* eslint-disable no-unused-vars */
import CardProduct from "../../components/CardProduct";
import styles from "./Category.module.scss"
import classNames from "classnames/bind";
import { Link, useParams, useSearchParams, useNavigate } from "react-router-dom";

import ProductApi from "../../api/ProductApi";
import { useEffect, useState } from "react";


const cx = classNames.bind(styles);

const Category = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  // const [page, setPage] = useState(1);

  const options = [
    { value: '', text: '--choose an option--' },
    { value: 'date-new', text: 'Date new' },
    { value: 'a-z', text: 'A-z' },
    { value: 'price-asc', text: 'Price from low to high' },
    { value: 'price-desc', text: 'Price from high to low' },
  ]
  const [optionValue, setOptionValue] = useState(options[0]);
  //
  const [isNext, setIsNext] = useState(true);
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setListProducts([]);
      try {
        let response;
        if (searchParams.get('sort') === 'price-asc') {
          response = await ProductApi.getProductByCategoryWithSortAndPage(params.category.toLocaleUpperCase(), 'price-asc', searchParams.get('page') || 1);
        } else if (searchParams.get('sort') === 'price-desc') {
          response = await ProductApi.getProductByCategoryWithSortAndPage(params.category.toLocaleUpperCase(), 'price-desc', searchParams.get('page') || 1);
        } else if (searchParams.get('sort') === 'a-z') {
          response = await ProductApi.getProductByCategoryWithSortAndPage(params.category.toLocaleUpperCase(), 'a-z', searchParams.get('page') || 1);
        } else {
          response = await ProductApi.getProductByCategoryWithSortAndPage(params.category.toLocaleUpperCase(),'date-new', searchParams.get('page') || 1);
        }
        setListProducts(response.data);
        setIsNext(response?.data.length === 20)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [params, searchParams]);

  const handleSortProduct = (event) => {
    setListProducts([]);
    setOptionValue(event.target.value);
    if (event.target.value === 'price-asc') {
      return navigate('?sort=price-asc&page=1');
    } else if (event.target.value === 'price-desc') {
      return navigate('?sort=price-desc&page=1');
    } else if (event.target.value === 'a-z') {
      return navigate('?sort=a-z&page=1');
    } else {
      return navigate('?sort=date-new&page=1');
    }
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("top-category-page")}>
        <label> Sort by: </label>
        <select id="sort-product" value={optionValue} onChange={handleSortProduct}>
          {options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
        </select>
      </div>
      <div className={cx("list-product")}>
        {listProducts.map((product, index) =>
          <CardProduct key={index}
            id={product.productId}
            image={product.images[0]}
            title={product.productName}
            proQuantity={product.quantity}
            price={product.price}
          />
        )}
      </div>
      <div className={cx("bottom-category-page")}>
        <div className={cx("paging")}>
          {parseInt(searchParams.get('page')) !== 1 ? <Link className={cx("paging-number")}
            to={`.?sort=${searchParams.get('sort') || 'date-new'}&page=${parseInt(searchParams.get('page')) - 1}`}>Pre</Link>
            : <span className={cx("paging-number")}>Pre</span>}
          {isNext ? <Link className={cx("paging-number")}
            to={`.?sort=${searchParams.get('sort') || 'date-new'}&page=${parseInt(searchParams.get('page')) + 1}`}>Next</Link>
            : <span className={cx("paging-number")}>Next</span>}
        </div>
      </div>
    </div>
  )
}

export default Category;