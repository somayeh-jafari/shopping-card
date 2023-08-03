import React from "react";
import { Link } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Actions
import {
  decrease,
  increase,
  removeItem,
  addItem,
} from "../../Redux/cart/cartAction";

//functions
import { shorten, isInCart, quantityCount } from "../../helper/functions";

//icons
import trashIcons from "../../assets/icons/trash.svg";

//styles
import styles from "../../styles/product.module.css";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <img
        className={styles.cardImage}
        src={productData.image}
        alt="products"
      />
      <h2>{shorten(productData.title)}</h2>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => {
                dispatch(decrease(productData));
              }}
            >
              -
            </button>
          )}

          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(removeItem(productData))}
            >
              <img src={trashIcons} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCount(state, productData.id)}
            </span>
          )}
          {isInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(increase(productData))}
            >
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(productData))}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
