import CartOverlayProduct from '../cartOverlayProduct/CartOverlayProduct';
import classes from './CartOverlay.module.css';

const CartOverlay = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.totalWrapper}>
        <h5>Total:</h5>
        <p>4500 ₾</p>
      </div>

      <div>
        <CartOverlayProduct />
        <CartOverlayProduct />
        <CartOverlayProduct />
      </div>

      <div className={classes.btnsWrapper}>
        <button className={classes.viewCartBtn}>View cart</button>
        <button className={classes.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default CartOverlay;
