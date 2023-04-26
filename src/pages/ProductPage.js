import classes from './ProductPage.module.css';
import productImg from '../assets/productImg.webp';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductsCarousel from '../components/productsCarousel/ProductsCarousel';
import heartIcon from '../assets/heartIcon.svg';
import fbLogo from '../assets/facebookLogo.svg';
import arrow from '../assets/arrowDown.svg';
import ProductDetails from '../components/productDetails/ProductDetails';

const ProductPage = () => {
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
                <img id={classes.prevBtn} src={arrow} alt="Previous picture" />
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
                <img id={classes.nextBtn} src={arrow} alt="Previous picture" />
              </button>
            </div>
          </div>

          <div className={classes.content}>
            <p className={classes.productCode}>
              <b>Product code: </b>
              <span>g7s0-567</span>
            </p>
            <h2 className={classes.productName}>RTX 3090</h2>
            <p className={classes.productCondition}>
              <b>Condition: </b> <span>Like new</span>
            </p>
            <p className={classes.productPrice}>
              4000₾ <span>6800₾</span>
            </p>

            <div className={classes.productQuantity}>
              <div className={classes.inputWrapper}>
                <button className={classes.decrBtn}>-</button>
                <label htmlFor="quantity"></label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  defaultValue={1}
                />
                <button className={classes.incrBtn}>+</button>
              </div>

              <button className={classes.addToCartBtn}>ADD TO CART</button>
            </div>

            <button className={classes.addToWishlistBtn}>
              <img src={heartIcon} alt="Add to wishlist icon" />
              Add to wishlist
            </button>

            <div className={classes.share}>
              <p>Share</p>
              <img src={fbLogo} alt="Share on Facebook" />
            </div>

            <ul className={classes.moreInfo}>
              <li>მოქმედებს 1 წლიანი გარანტია საუკეთესო პირობებით</li>
              <li>შეგიძლიათ ისარგებლოთ განვადებით</li>
              <li>სისტემა იწყობა შეკვეთიდან 24 საათში</li>
              <li>კომპლექტაცია შედგება ახალი და Like New დეტალებისაგან</li>
              <li>
                ყველა ნაწილს გავლილი აქვს საჭირო ტესტირება და იყიდება 1 წლიანი
                გარანტიით
              </li>
              <li>
                მახასიათებლებში შეგიძლიათ შეიტნოთ ცვლილებები სურვილისამებრ
              </li>
            </ul>
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
