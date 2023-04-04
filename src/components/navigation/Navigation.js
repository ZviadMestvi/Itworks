import classes from './Navigation.module.css';
import rocketIcon from '../../assets/rocketIcon.svg';
import newIcon from '../../assets/newIcon.svg';
import saleIcon from '../../assets/saleIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navContent}>
        <div className={classes.listWrapper}>
          <button className={classes.dropdownBtn}>
            <img
              id={classes.hamburgerIcon}
              src={hamburgerMenu}
              alt="Hamburger menu icon"
            />
            Browse categories
            <img
              id={classes.arrowDownIcon}
              src={arrowDown}
              alt="Dropdown icon"
            />
          </button>

          <ul>
            <li>
              <p>PC Builder</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>Warranty</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>

          <div className={classes.breakLine}></div>
        </div>

        <div className={classes.logosWrapper}>
          <p>
            <span>
              <img src={rocketIcon} alt="bestseller icon" />
            </span>
            Bestseller
          </p>
          <p>
            <span>
              <img src={newIcon} alt="new icon" />
            </span>
            New
          </p>
          <p>
            <span>
              <img src={saleIcon} alt="sale icon" />
            </span>
            Sales
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
