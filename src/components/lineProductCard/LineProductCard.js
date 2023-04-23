import classes from './LineProductCard.module.css';
import productImg from '../../assets/productImg.webp';
import wishlistIcon from '../../assets/heartIcon.svg';

const LineProductCard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftContainer}>
        <img className={classes.productImg} src={productImg} alt="RTX 3090" />
        <div className={classes.titleWrapper}>
          <h5>RTX 3090</h5>
          <p>
            გრაფიკული პროცესორი: AMD ATI Radeon მეხსიერების მოცულობა: 8 GB
            მეხსიერების ტიპი: GDDR5 მეხსიერების ინტერფეისი: 256 Bit
          </p>
        </div>
      </div>

      <div className={classes.rightContainer}>
        <p className={classes.price}>
          12000₾ <span>19000₾</span>
        </p>
        <button className={classes.addToCartBtn}>ADD TO CART</button>
        <button className={classes.addToWishlistBtn}>
          <img src={wishlistIcon} alt="Add to favourites" />
        </button>
      </div>
    </div>
  );
};

export default LineProductCard;
