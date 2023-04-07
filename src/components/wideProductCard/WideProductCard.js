import classes from './WideProductCard.module.css';
import productImg from '../../assets/productImg.webp';
import wishlistIcon from '../../assets/heartIcon.svg';

const WideProductCard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <img className={classes.productImg} src={productImg} alt="Ryzen PC" />
        <button className={classes.addToWishlistBtn}>
          <img src={wishlistIcon} alt="Add to favourites" />
        </button>
      </div>

      <div className={classes.productContent}>
        <h5>R5 3600X - RAM 16GB - HDD 500GB - SSD 240GB - GTX 1070 8GB</h5>
        <p className={classes.warranty}>1 Year Warranty</p>
        <p className={classes.desc}>
          CPU - Intel Core i3 10100F <br />
          Processor MoBo - H410Socket 1200 <br />
          RAM - 2x8GB 2666MHz DDR4 <br />
          GPU - Nvidia GTX 1070 8GB <br />
          SSD - Colorful 500GB Sata 2.5" <br />
          PSU - DeepCool PF 550 80+ <br />
          Case - Sirius Black Strike <br />
          FAN - 200T
        </p>
        <p className={classes.price}>
          <span className={classes.oldPrice}>₾ 3390</span>
          <span className={classes.gold}>₾ </span>
          2390
        </p>
      </div>
    </div>
  );
};

export default WideProductCard;
