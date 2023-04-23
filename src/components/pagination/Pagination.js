import classes from './Pagination.module.css';
import heroArrow from '../../assets/heroArrow.svg';

const Pagination = () => {
  return (
    <div className={classes.wrapper}>
      <button>
        <img id={classes.prevBtnIcon} src={heroArrow} alt="prev page" />
      </button>
      <ul>
        <li>1</li>
        <li>...</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>...</li>
        <li>12</li>
      </ul>
      <button>
        <img src={heroArrow} alt="prev page" />
      </button>
    </div>
  );
};

export default Pagination;
