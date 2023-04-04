import classes from './RecCarousel.module.css';
import WideProductCard from '../wideProductCard/WideProductCard';
import arrow from '../../assets/arrowDown.svg';

const RecCarousel = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.carouselTitle}>
        <h4>Recommended</h4>
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
        <div className={classes.productsTrack}>
          <div className={classes.singleSlider}>
            <WideProductCard />
            <WideProductCard />
          </div>
          <div className={classes.singleSlider}>
            <WideProductCard />
            <WideProductCard />
          </div>
          <div className={classes.singleSlider}>
            <WideProductCard />
            <WideProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecCarousel;
