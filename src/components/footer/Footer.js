import classes from './Footer.module.css';
import logo from '../../assets/logo.svg';
import visaIcon from '../../assets/visaIcon.svg';
import mastercardIcon from '../../assets/mastercardIcon.svg';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <nav className={classes.footerNav}>
        <div>
          <img src={logo} alt="ITWorks logo" />
          <p className={classes.phone}>(+995) 591-84-44-48</p>
          <p>
            <b>Address</b>
          </p>
          <address className={classes.contactInfo}>
            Tbilisi, Vazha-Pshavela 78a
          </address>
          <p className={classes.contactInfo}>
            Working everyday. 11:00 to 20:00
          </p>
          <p className={classes.contactInfo}>info@itw.ge</p>
        </div>

        <div className={classes.navList}>
          <h5>Popular Categories</h5>
          <ul>
            <li>
              <a href="#">Notebooks </a>
            </li>
            <li>
              <a href="#">Electronics </a>
            </li>
            <li>
              <a href="#">Computers </a>
            </li>
            <li>
              <a href="#">Accessories </a>
            </li>
            <li>
              <a href="#">ITWorks Desktops</a>
            </li>
          </ul>
        </div>

        <div className={classes.navList}>
          <h5>PC Components</h5>
          <ul>
            <li>
              <a href="#"> Motherboards </a>
            </li>
            <li>
              <a href="#"> CPU </a>
            </li>
            <li>
              <a href="#"> RAM </a>
            </li>
            <li>
              <a href="#"> SSD </a>
            </li>
            <li>
              <a href="#"> Cases </a>
            </li>
          </ul>
        </div>

        <div className={classes.navList}>
          <h5>Help</h5>
          <ul>
            <li>
              <a href="#"> Terms and Conditions</a>
            </li>
            <li>
              <a href="#"> Privacy Policy</a>
            </li>
            <li>
              <a href="#"> Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={classes.belowFooter}>
        <div className={classes.belowFooterContent}>
          <p>© ITworks - All Rights Reserved</p>
          <div>
            <img src={visaIcon} alt="Visa icon" />
            <img src={mastercardIcon} alt="Mastercard icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
