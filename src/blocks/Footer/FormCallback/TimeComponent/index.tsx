import styles from './timeComponent.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

interface ITimeComponent {
	formik: any;
}

export const TimeComponent: React.FC<ITimeComponent> = ({ formik }) => {

	return (
    <div className={cx('date')}>
      <p className={cx('input_title')}>Время:</p>
      <fieldset
        className={cx('date-list')}
        id="time"
        {...formik.getFieldProps("time")}
      >
        <div className={cx('date-item')}>
          <label className={cx('input_title', 'date-item__title')} htmlFor={'radioOption1'}>C 10:00 до 13:00
            <input
              type='radio'
              name="time"
              id="radioOption1"
              value="C 10:00 до 13:00"
              className={cx('date-item__input')}
            />
            <div className={cx('date-item__input_main')}>
              <Image
                wrapperClassName={cx('checked_img')}
                src="/assets/checkForm.png"
                width="18"
                height="18"
                alt="radio"
              />
            </div>
          </label>
        </div>
        <div className={cx('date-item')}>
          <label className={cx('input_title', 'date-item__title')} htmlFor={'radioOption2'}>C 14:00 до 17:00
            <input
              type='radio'
              name="time"
              id="radioOption2"
              value="C 14:00 до 17:00"
              className={cx('date-item__input')}
            />
            <div className={cx('date-item__input_main')}>
              <Image
                wrapperClassName={cx('checked_img')}
                src="/assets/checkForm.png"
                width="18"
                height="18"
                alt="radio"
              />
            </div>
          </label>
        </div>
        <div className={cx('date-item')}>
          <label className={cx('input_title', 'date-item__title')} htmlFor={'radioOption3'}>C 18:00 до 21:00
            <input
              type='radio'
              name="time"
              id="radioOption3"
              value="C 18:00 до 21:00"
              className={cx('date-item__input')}
            />
            <div className={cx('date-item__input_main')}>
              <Image
                wrapperClassName={cx('checked_img')}
                src="/assets/checkForm.png"
                width="18"
                height="18"
                alt="radio"
              />
            </div>
          </label>
        </div>
      </fieldset>
    </div>
	)
}
