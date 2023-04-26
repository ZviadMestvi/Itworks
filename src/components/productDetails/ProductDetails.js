import { useState } from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = () => {
  const [chosenOption, setChosenOption] = useState('desc');

  const chooseOption = function (value) {
    setChosenOption(value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.options}>
        <button
          onClick={chooseOption.bind(null, 'desc')}
          className={chosenOption === 'desc' ? classes.chosenOption : ''}
        >
          Description
        </button>
        <button
          onClick={chooseOption.bind(null, 'specs')}
          className={chosenOption === 'specs' ? classes.chosenOption : ''}
        >
          Specification
        </button>
      </div>

      <div className={classes.content}>
        {chosenOption === 'desc' && (
          <div className={classes.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in
              reprehend in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt
            </p>
          </div>
        )}

        {chosenOption === 'specs' && (
          <table>
            <tbody>
              <tr>
                <th>CPU</th>
                <td>AMD Ryzen 5 2600 Processor</td>
              </tr>
              <tr>
                <th>MoBo</th>
                <td>B 450 , AM4 Socket</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>2x8GB 3200 MHz</td>
              </tr>
              <tr>
                <th>GPU</th>
                <td>GTX 1070 8GB</td>
              </tr>
              <tr>
                <th>HDD</th>
                <td>500GB 7200 RPM</td>
              </tr>
              <tr>
                <th>SSD</th>
                <td>Colorful SL500 256GB Sata III 2.5</td>
              </tr>
              <tr>
                <th>PSU</th>
                <td>Zalman 600W</td>
              </tr>
              <tr>
                <th>Case</th>
                <td>Segotep Prime G Max ATX</td>
              </tr>
              <tr>
                <th>FAN</th>
                <td>DEEPCOOL 300</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
