import React from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

//finctions
import { shorten } from "../helper/functions";

//styles
import styles from "../styles/productDetail.module.css";
const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

  const data = useSelector((state) => state.productsState.products);
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="product" />
      <div className={styles.textContainer}>
        <h3>{shorten(title)}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <span>category:</span>
          {category}
        </p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $ </span>
          <Link to="/products">back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
