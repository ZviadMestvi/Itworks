import mainPage from './ProductCard.module.css';
import productsPage from './GridProductCard.module.css';
import productImg from '../../assets/productImg.webp';
import wishlistIcon from '../../assets/heartIcon.svg';
import { useNavigate } from 'react-router-dom';

const ProductCard = props => {
  const classes = props.page === 'main' ? mainPage : productsPage;
  const navigate = useNavigate();

  const navigateHandler = function (value) {
    navigate(value);
  };

  return (
    <div
      className={classes.wrapper}
      onClick={navigateHandler.bind(null, '/product/test')}
    >
      <div className={classes.imgWrapper}>
        <img className={classes.productImg} src={productImg} alt="Ryzen PC " />
        <button className={classes.addToWishlistBtn}>
          <img src={wishlistIcon} alt="Add to favourites" />
        </button>
      </div>
      <div className={classes.productContent}>
        <h5>R5 3600X - RAM 16GB - HDD 500GB - SSD 240GB - GTX 1070 8GB</h5>
        <p>
          <span className={classes.oldPrice}>₾ 3390</span>
          <span className={classes.gold}>₾ </span>
          2390
        </p>
      </div>

      <div className={classes.addToCartBtn}>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
