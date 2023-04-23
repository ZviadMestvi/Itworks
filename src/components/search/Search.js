import { useState, useRef } from 'react';
import classes from './Search.module.css';
import SearchProductCard from '../searchProductCard/SearchProductCard';

const categories = [
  'All Categories',
  'PC',
  'CPU',
  'RAM',
  'Motherboard',
  'GPU',
  'Cases',
  'CPU Coolers',
  'HDD',
  'SSD',
  'Power Supply',
  'Networking',
  'Laptops',
  'Laptop Batteries',
  'Accessories',
  'Displays',
  'UPS',
  'External HDD',
  'Peripherals',
];

const Search = () => {
  const categoryName = useRef();
  const [listVis, setListVis] = useState(false);
  const [activeLi, setActiveLi] = useState();
  const [searchValue, setSearchValue] = useState();

  const toggleListVis = () => {
    setListVis(!listVis);
  };

  const setActiveCategory = (index, category) => {
    setActiveLi(index);
    categoryName.current.innerText = category;
    toggleListVis();
  };

  const renderCategories = categories.map((category, i) => {
    return (
      <li
        key={category}
        onClick={setActiveCategory.bind(null, i, category)}
        className={activeLi === i ? classes.activeCategory : ''}
      >
        {category}
      </li>
    );
  });

  return (
    <div className={classes.searchWrapper}>
      <div className={classes.categoriesWrapper}>
        <button
          aria-label="show all categories"
          onClick={toggleListVis}
          className={classes.categoriesBtn}
        >
          <span ref={categoryName}>All categories</span>
          <svg width="11" height="8" viewBox="0 0 11 8">
            <path
              d="M10.9101 2.19922L9.6302 0.992188L5.79041 4.61328L1.95064 0.992188L0.670715 2.19922L5.79041 7.02734L10.9101 2.19922Z"
              fill="#112711"
            />
          </svg>
        </button>

        {listVis && <ul>{renderCategories}</ul>}
      </div>

      <label htmlFor="search"></label>
      <input
        className={classes.searchBar}
        onChange={e => setSearchValue(e.target.value)}
        id="search"
        name="search"
        type="text"
        placeholder="Search product..."
      />
      <button className={classes.searchBtn}>Search</button>

      {searchValue && (
        <div className={classes.resultsWrapper}>
          {searchValue === 'pro' ? (
            <>
              <SearchProductCard />
              <SearchProductCard />
              <SearchProductCard />
              <SearchProductCard />
            </>
          ) : (
            <p className={classes.emptyResultsMsg}>
              0 Product found for <span>{searchValue}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
