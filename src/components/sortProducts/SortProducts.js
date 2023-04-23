import classes from './SortProducts.module.css';
import listIcon from '../../assets/listIcon.svg';
import gridIcon from '../../assets/gridIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import { useState } from 'react';

const sortOptions = [
  'recent',
  'name a-z',
  'name z-a',
  'price low-high',
  'price high-low ',
  'in stock',
];

const SortProducts = props => {
  const [sortOption, setSortOption] = useState('recent');
  const [sortOptionsVis, setSortOptionsVis] = useState(false);

  const chooseSortOption = function (value) {
    setSortOption(value);
  };

  const toggleOptionsVis = function () {
    setSortOptionsVis(!sortOptionsVis);
  };

  const renderSortOptions = sortOptions?.map(option => {
    return (
      <li
        key={option}
        className={sortOption === option ? classes.activeSort : ''}
        onClick={chooseSortOption.bind(null, option)}
      >
        {option}
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftContainer}>
        <button
          className={`${classes.gridBtn} ${
            props.productsView === 'grid' ? classes.activeView : ''
          }`}
          onClick={props.chooseProductsView.bind(null, 'grid')}
        >
          <img src={gridIcon} alt="switch to grid view" />
        </button>

        <button
          className={`${classes.listBtn} ${
            props.productsView === 'list' ? classes.activeView : ''
          }`}
          onClick={props.chooseProductsView.bind(null, 'list')}
        >
          <img src={listIcon} alt="switch to list view" />
        </button>

        <p>There are 12 products</p>
      </div>

      <div className={classes.rightContainer} onClick={toggleOptionsVis}>
        <p className={classes.sortByText}>Sort By:</p>
        <div className={classes.dropdown}>
          <p>{sortOption}</p>
          <img src={arrowDown} alt="downward arrow" />
          {sortOptionsVis && <ul>{renderSortOptions}</ul>}
        </div>
      </div>
    </div>
  );
};

export default SortProducts;
