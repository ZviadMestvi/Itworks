import classes from './Header.module.css';
import logo from '../../assets/logo.svg';
import profile from '../../assets/profileIcon.svg';
import heart from '../../assets/heartIcon.svg';
import cart from '../../assets/cartIcon.svg';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import QuickInfo from '../quickInfo/QuickInfo';

const Header = () => {
  const goToHome = function () {
    window.location = '/';
  };

  return (
    <header>
      <QuickInfo />

      <div className={classes.headerContent}>
        <div className={classes.logoWrapper} onClick={goToHome}>
          <img src={logo} alt="ITWorks logo" />
        </div>

        <Search />

        <div className={classes.headerTools}>
          <button>
            <img src={profile} alt="Profile icon" />
            <p>Profile</p>
          </button>

          <button>
            <img src={heart} alt="Heart icon" />
            <p>Wishlist</p>
          </button>

          <button>
            <img id={classes.cartIcon} src={cart} alt="Cart icon" />
            <p>Cart</p>
          </button>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
