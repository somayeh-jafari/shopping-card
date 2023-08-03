import React from "react";

//Redux
import { useDispatch } from "react-redux";

//Actions
import { removeItem, increase, decrease } from "../../Redux/cart/cartAction";

//functions
import { shorten } from "./../../helper/functions";

//icons
import trashIcons from "../../assets/icons/trash.svg";

//styles
import styles from "../../styles/cart.module.css";

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  const { image, price, quantity, title } = data;
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="cart" />
      <div className={styles.data}>
        <h1>{shorten(title)}</h1>
        <p>{price} $</p>
      </div>

      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        ) : (
          <button onClick={() => dispatch(removeItem(data))}>
            <img src={trashIcons} alt="product" style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
