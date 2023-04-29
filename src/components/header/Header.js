import classes from './Header.module.css';
import logo from '../../assets/logo.svg';
import profile from '../../assets/profileIcon.svg';
import heart from '../../assets/heartIcon.svg';
import cart from '../../assets/cartIcon.svg';
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import QuickInfo from '../quickInfo/QuickInfo';
import CartOverlay from '../cartOverlay/CartOverlay';
import { useState } from 'react';

const Header = () => {
  const [cartOverlayVis, setCartOverlayVis] = useState(false);

  const goToHome = function () {
    window.location = '/';
  };

  const toggleCartOverlayVis = function () {
    setCartOverlayVis(!cartOverlayVis);
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
          <button className={classes.toolBtn}>
            <img src={profile} alt="Profile icon" />
            <span>Profile</span>
          </button>

          <button className={classes.toolBtn}>
            <img src={heart} alt="Heart icon" />
            <span>Wishlist</span>
          </button>

          <button onClick={toggleCartOverlayVis} className={classes.toolBtn}>
            <img id={classes.cartIcon} src={cart} alt="Cart icon" />
            <span>Cart</span>
          </button>

          {cartOverlayVis && <CartOverlay />}
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
