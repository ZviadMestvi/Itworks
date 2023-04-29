import classes from './CartOverlayProduct.module.css';
import productImg from '../../assets/productImg.webp';

const CartOverlayProduct = () => {
  return (
    <div className={classes.wrapper}>
      <img src={productImg} alt="RTX 3090" />
      <div className={classes.productInfo}>
        <p className={classes.productName}>RTX 3090</p>
        <p className={classes.productPrice}>
          <span>1 </span>x <span className={classes.price}>4,500₾</span>
        </p>
      </div>

      <button className={classes.removeBtn}>X</button>
    </div>
  );
};

export default CartOverlayProduct;
