import { useState } from 'react';
import classes from './ListBasedFilter.module.css';

const ListBasedFilter = props => {
  const [activeBrands, setActiveBrands] = useState([]);

  const toggleActive = function (name) {
    if (activeBrands.includes(name)) {
      setActiveBrands(activeBrands.filter(item => item !== name));
      return;
    }

    setActiveBrands(prevState => [...prevState, name]);
  };

  const renderCategories = props.categories?.map(category => {
    return (
      <li key={category.id} onClick={toggleActive.bind(null, category.name)}>
        <div
          className={`${classes.checkmark} ${
            activeBrands.includes(category.name) ? classes.active : ''
          }`}
        ></div>
        <p>
          {category.name} <span>({category.quantity})</span>
        </p>
      </li>
    );
  });

  return (
    <div className={classes.wrapper}>
      <h4>{props.title}</h4>
      <ul className={classes.categories}>{renderCategories}</ul>
    </div>
  );
};

export default ListBasedFilter;
