import classes from './SalesCarousel.module.css';
import arrow from '../../assets/arrowDown.svg';
import LongProductCard from '../longProductCard/LongProductCard';

const SalesCarousel = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.carouselTitle}>
        <h4>Hot deals</h4>

        <div className={classes.line}></div>

        <div className={classes.container}>
          <button className={classes.prevBtn}>
            <img src={arrow} alt="prev product" />
          </button>
          <button className={classes.nextBtn}>
            <img src={arrow} alt="next product" />
          </button>
        </div>
      </div>

      <div className={classes.productsWrapper}>
        <LongProductCard />
        <LongProductCard />
        <LongProductCard />
        <LongProductCard />
        <LongProductCard />
        <LongProductCard />
      </div>
    </div>
  );
};

export default SalesCarousel;
