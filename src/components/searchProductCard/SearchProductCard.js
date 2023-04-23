import classes from './SearchProductCard.module.css';
import productImg from '../../assets/productImg.webp';

const SearchProductCard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <img src={productImg} alt="Ryzen PC" />
        <h5>Ryzen PC</h5>
      </div>

      <div>
        <p className={classes.oldPrice}>3390 ₾</p>
        <p className={classes.price}>2390 ₾</p>
      </div>
    </div>
  );
};

export default SearchProductCard;
