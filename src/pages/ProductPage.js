import classes from './ProductPage.module.css';
import productImg from '../assets/productImg.webp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductsCarousel from '../components/productsCarousel/ProductsCarousel';
import heartIcon from '../assets/heartIcon.svg';
import arrow from '../assets/arrowDown.svg';
import ProductDetails from '../components/productDetails/ProductDetails';
import { useState } from 'react';

const MAX_QUANTITY = 5;

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = function () {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  const incrementQuantity = function () {
    if (quantity === MAX_QUANTITY) return;

    setQuantity(quantity + 1);
  };

  const quantityChangeHandler = function (e) {
    setQuantity(e.target.value);
  };

  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <div className={classes.topWrapper}>
          <div className={classes.imagesWrapper}>
            <img
              className={classes.mainImage}
              src={productImg}
              alt="RTX 3090"
            />
            <div className={classes.imagesSlider}>
              <button>
                <img id={classes.prevBtn} src={arrow} alt="Previous img" />
              </button>
              <ul className={classes.moreImages}>
                <li>
                  <img
                    className={classes.selectedImg}
                    src={productImg}
                    alt="RTX 3090"
                  />
                </li>
                <li>
                  <img src={productImg} alt="RTX 3090" />
                </li>
                <li>
                  <img src={productImg} alt="RTX 3090" />
                </li>
                <li>
                  <img src={productImg} alt="RTX 3090" />
                </li>
              </ul>
              <button>
                <img id={classes.nextBtn} src={arrow} alt="Next img" />
              </button>
            </div>
          </div>

          <div className={classes.content}>
            <p className={classes.productCode}>Code: t6v0-258</p>
            <h2 className={classes.productName}>RTX 4090</h2>
            <p className={classes.productPrice}>
              4000₾ <span>6800₾</span>
            </p>
            <p className={classes.productCondition}>
              <b>Like new</b>
            </p>
            <p className={classes.productDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <div className={classes.productQuantity}>
              <div className={classes.inputWrapper}>
                <button className={classes.decrBtn} onClick={decrementQuantity}>
                  -
                </button>
                <label htmlFor="quantity"></label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  max={MAX_QUANTITY}
                  value={quantity}
                  onChange={quantityChangeHandler}
                />
                <button className={classes.incrBtn} onClick={incrementQuantity}>
                  +
                </button>
              </div>

              <button className={classes.addToCartBtn}>ADD TO CART</button>

              <button className={classes.addToWishlistBtn}>
                <img src={heartIcon} alt="Add to wishlist icon" />
              </button>
            </div>

            <div className={classes.info}>
              <div>
                <p>სისტემა იწყობა შეკვეთიდან 24 საათში</p>
              </div>
              <div>
                <p>კომპლექტაცია შედგება ახალი და Like New დეტალებისაგან</p>
              </div>
              <div>
                <p>
                  ყველა ნაწილს გავლილი აქვს საჭირო ტესტირება და იყიდება 1 წლიანი
                  გარანტიით
                </p>
              </div>
              <div>
                <p>
                  მახასიათებლებში შეგიძლიათ შეიტნოთ ცვლილებები სურვილისამებრ
                </p>
              </div>
            </div>
          </div>
        </div>

        <ProductDetails />

        <ProductsCarousel title="Similar Products" categories={[]} />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
