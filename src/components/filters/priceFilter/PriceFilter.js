import { useRef } from 'react';
import classes from './PriceFilter.module.css';

const MIN_PRICE = 0;
const MAX_PRICE = 13000;

const PriceFilter = () => {
  const range = useRef();
  const leftInput = useRef();
  const rightInput = useRef();
  const leftThumb = useRef();
  const rightThumb = useRef();
  const minRange = useRef();
  const maxRange = useRef();

  const setLeftValue = () => {
    const _this = leftInput.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);

    _this.value = Math.min(
      parseInt(_this.value),
      parseInt(rightInput.current.value) - 1
    );

    let percent = ((_this.value - min) / (max - min)) * 100;
    leftThumb.current.style.left = percent + '%';
    range.current.style.left = percent + '%';
    minRange.current.value = Math.round((percent / 100) * max);
  };

  const setRightValue = () => {
    const _this = rightInput.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);

    _this.value = Math.max(
      parseInt(_this.value),
      parseInt(leftInput.current.value) + 1
    );

    let percent = ((_this.value - min) / (max - min)) * 100;
    rightThumb.current.style.right = 100 - percent + '%';
    range.current.style.right = 100 - percent + '%';
    maxRange.current.value = Math.round((percent / 100) * max);
  };

  const setMinValue = element => {
    const e = element.target;

    if (
      e.value > parseInt(rightInput.current.value) ||
      e.value < MIN_PRICE ||
      e.value === ''
    )
      return;

    const min = parseInt(leftInput.current.min);
    const max = parseInt(leftInput.current.max);

    let percent = ((e.value - min) / (max - min)) * 100;
    leftThumb.current.style.left = percent + '%';
    range.current.style.left = percent + '%';
    leftInput.current.value = e.value;
  };

  const setMaxValue = element => {
    const e = element.target;

    if (
      e.value < parseInt(leftInput.current.value) ||
      e.value > MAX_PRICE ||
      e.value === ''
    )
      return;

    const min = parseInt(rightInput.current.min);
    const max = parseInt(rightInput.current.max);

    let percent = ((e.value - min) / (max - min)) * 100;
    rightThumb.current.style.right = 100 - percent + '%';
    range.current.style.right = percent + '%';
    rightInput.current.value = e.value;
  };

  return (
    <div className={classes.wrapper}>
      <h4>Price</h4>
      <div className={classes.rangeWrapper}>
        <label htmlFor="min"></label>
        <input
          ref={minRange}
          id="min"
          name="min"
          type="number"
          min={MIN_PRICE}
          max={MAX_PRICE}
          placeholder="Min"
          defaultValue={MIN_PRICE}
          onChange={setMinValue}
        />
        <div className={classes.rangeDash}></div>
        <label htmlFor="max"></label>
        <input
          ref={maxRange}
          id="max"
          name="max"
          type="number"
          min={MIN_PRICE}
          max={MAX_PRICE}
          placeholder="Max"
          defaultValue={MAX_PRICE}
          onChange={setMaxValue}
        />
      </div>

      <div className={classes.sliderWrapper}>
        <label htmlFor="minPriceRange"></label>
        <input
          ref={leftInput}
          id="minPriceRange"
          name="minPriceRange"
          aria-label="minPriceRange"
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          defaultValue={MIN_PRICE}
          onInput={setLeftValue}
        />

        <label htmlFor="maxPriceRange"></label>
        <input
          ref={rightInput}
          id="maxPriceRange"
          name="maxPriceRange"
          aria-label="maxPriceRange"
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          defaultValue={MAX_PRICE}
          onInput={setRightValue}
        />

        <div className={classes.slider}>
          <div className={classes.track}></div>
          <div ref={range} className={classes.range}></div>
          <div ref={leftThumb} className={classes.leftThumb}></div>
          <div ref={rightThumb} className={classes.rightThumb}></div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
