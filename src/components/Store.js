import React, { useEffect } from "react";

//styles
import styles from "../styles/store.module.css";

// Redux
import { fetchProducts } from "../Redux/products/productsAction";
import { useSelector, useDispatch } from "react-redux";

//component
import Product from "./shared/Product";
import Loader from "./shared/Loader";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <p>something went wrong!</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
