import classes from './Hero.module.css';
import hero from '../../assets/hero.webp';
import arrow from '../../assets/heroArrow.svg';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.listWrapper}>
        <div className={classes.listNameWrapper}>
          <h5>All categories</h5>
        </div>
        <ul>
          <li>PCs</li>
          <li>Laptops</li>
          <li>Monitors</li>
          <li>PC parts</li>
          <li>Accessories</li>
          <li>Networking</li>
          <li>Peripherals</li>
          <li>UPS</li>
          <li>Laptop batteries</li>
        </ul>
      </div>

      <div className={classes.carousel}>
        <div className={classes.imagesWrapper}>
          <img src={hero} alt="Hero" />
          <img src={hero} alt="Hero" />
          <img src={hero} alt="Hero" />
          <img src={hero} alt="Hero" />
          <img src={hero} alt="Hero" />
        </div>

        <div className={classes.btnsWrapper}>
          <button className={classes.prevBtn}>
            <img src={arrow} alt="Previous button" />
          </button>

          <button className={classes.nextBtn}>
            <img src={arrow} alt="Next button" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
