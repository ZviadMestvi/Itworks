import classes from './QuickInfo.module.css';
import phoneIcon from '../../assets/phoneIcon.svg';
import mailIcon from '../../assets/mailIcon.svg';

const QuickInfo = () => {
  return (
    <div className={classes.quickInfo}>
      <div className={classes.quickInfoContent}>
        <div className={classes.textWrapper}>
          <p>Working 24/7, 11:00 - 20:00</p>
          <div className={classes.breakLine}></div>
          <p>Free delivery from ₾500</p>
        </div>

        <div className={classes.textWrapper}>
          <p>
            <span>
              <img id={classes.phoneIcon} src={phoneIcon} alt="Phone icon" />
            </span>
            +995 591-84-44-48
          </p>
          <div className={classes.breakLine}></div>
          <p>
            <span>
              <img id={classes.mailIcon} src={mailIcon} alt="Phone icon" />
            </span>
            info@itw.ge
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
