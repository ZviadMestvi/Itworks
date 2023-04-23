import classes from './ProductsCarousel.module.css';
import ProductCard from '../productCard/ProductCard';
import arrow from '../../assets/arrowDown.svg';

const ProductCarousel = props => {
  const renderCategories = props.categories.map(category => {
    return <li key={category}>{category}</li>;
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.carouselTitle}>
        <h4>{props.title}</h4>

        <ul>{renderCategories}</ul>

        <div className={classes.btnsWrapper}>
          <button className={classes.prevBtn}>
            <img src={arrow} alt="prev product" />
          </button>
          <button className={classes.nextBtn}>
            <img src={arrow} alt="next product" />
          </button>
        </div>
      </div>

      <div className={classes.productsWrapper}>
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
        <ProductCard page="main" />
      </div>
    </div>
  );
};

export default ProductCarousel;
