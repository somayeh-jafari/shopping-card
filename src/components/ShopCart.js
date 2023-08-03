import React from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Actions
import { checkout, clear } from "../Redux/cart/cartAction";

//components
import Cart from "./shared/Cart";

//react-router-dom
import { Link } from "react-router-dom";

//styles
import styles from "../styles/shopCart.module.css";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
        {state.itemsCounter > 0 && (
          <div className={styles.payments}>
            <p>
              <span>Total Items: </span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Payments:</span>
              {state.total} $
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={styles.checkout}
                onClick={() => dispatch(checkout())}
              >
                Check Out
              </button>
              <button
                className={styles.clear}
                onClick={() => dispatch(clear())}
              >
                Clear
              </button>
            </div>
          </div>
        )}
        {state.checkout && (
          <div className={styles.complete}>
            <h3>checked out successfully</h3>
            <Link to="/products">Buy More</Link>
          </div>
        )}
        {!state.checkout && state.itemsCounter === 0 && (
          <div className={styles.complete}>
            <h3>Want to Buy? </h3>
            <Link to="/products">Go to Shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopCart;
