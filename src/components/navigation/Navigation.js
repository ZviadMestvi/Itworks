import classes from './Navigation.module.css';
import rocketIcon from '../../assets/rocketIcon.svg';
import newIcon from '../../assets/newIcon.svg';
import saleIcon from '../../assets/saleIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import hamburgerMenu from '../../assets/hamburgerMenu.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  'All Categories',
  'PCs',
  'Laptops',
  'Displays',
  'PC Parts',
  'Accessories',
  'Networking',
  'Peripherals',
  'UPS',
  'Laptop Batteries',
];

const Navigation = () => {
  const navigate = useNavigate();
  const [categoriesVis, setCategoriesVis] = useState(false);

  const navigateHandler = function (value) {
    navigate(value);
  };

  const toggleCategoriesVis = function () {
    setCategoriesVis(!categoriesVis);
  };

  const renderCategories = categories.map((category, i) => {
    return <li key={category}>{category}</li>;
  });

  return (
    <nav className={classes.nav}>
      <div className={classes.navContent}>
        <div className={classes.listWrapper}>
          <div className={classes.dropdownBtnWrapper}>
            <button
              className={classes.dropdownBtn}
              onClick={toggleCategoriesVis}
            >
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

            {categoriesVis && (
              <ul className={classes.categories}>{renderCategories}</ul>
            )}
          </div>

          <ul className={classes.navItems}>
            <li onClick={navigateHandler.bind(null, '/products')}>
              <p>PC Builder</p>
            </li>
            <li onClick={navigateHandler.bind(null, '/products')}>
              <p>Services</p>
            </li>
            <li onClick={navigateHandler.bind(null, '/products')}>
              <p>Warranty</p>
            </li>
            <li onClick={navigateHandler.bind(null, '/products')}>
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
