import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.searchWrapper}>
      <button className={classes.categoriesBtn}>
        <span>All categories</span>
        <svg width="11" height="8" viewBox="0 0 11 8">
          <path
            d="M10.9101 2.19922L9.6302 0.992188L5.79041 4.61328L1.95064 0.992188L0.670715 2.19922L5.79041 7.02734L10.9101 2.19922Z"
            fill="#112711"
          />
        </svg>
      </button>
      <label htmlFor="search"></label>
      <input
        className={classes.searchBar}
        id="search"
        name="search"
        type="text"
        placeholder="Search product..."
      />
      <button className={classes.searchBtn}>Search</button>
    </div>
  );
};

export default Search;
