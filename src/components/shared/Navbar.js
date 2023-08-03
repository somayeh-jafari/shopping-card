import React from "react";
import { Link } from "react-router-dom";

//Redux
import { useSelector } from "react-redux";

//styles
import styles from "../../styles/navbar.module.css";

//icons
import shopCart from "../../assets/icons/black-shopping-cart-10926.svg";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopCart} alt="shop" style={{ width: "40px" }} />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
