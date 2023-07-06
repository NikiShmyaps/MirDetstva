import { FC, ChangeEvent } from 'react';
import styles from './dopService.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

interface IDopService {
	formik: any;
}

export const DopService: FC<IDopService> = ({ formik }) => {
  const dopServices = [
    {
      title: "Фольгированная дискотека",
      id: "dopService1"
    },
    {
      title: "Мастер класс (800 рублей ребенок)",
      id: "dopService2"
    }
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;

    if ( checked ) {
      formik.setFieldValue("dopServices", [...formik.values.dopServices, name]);
    } else {
			formik.setFieldValue(
				"dopServices",
				[...formik.values.dopServices.filter((item: string) => item !== name)]
			);
    }
  }

	return (
    <div className={cx('date')}>
      <p className={cx('input_title', 'group_title')}>Выберете дополнительную услугу:</p>
      <fieldset
        className={cx('date-list')}
        id="dopServices"
        {...formik.getFieldProps("dopServices")}
      >
        {dopServices.map(item => (
          <div className={cx('date-item')}  key={item.id}>
            <label className={cx('input_title', 'date-item__title')} htmlFor={item.id}>{item.title}
              <input
                type='checkbox'
                name="dopServices"
                id={item.id}
                value={item.title}
                onChange={handleChange}
                className={cx('date-item__input')}
              />
              <div className={cx('date-item__input_main')}>
                <Image
                  wrapperClassName={cx('checked_img')}
                  src="/assets/checkForm.png"
                  width="18"
                  height="18"
                  alt="checkbox"
                />
              </div>
            </label>
          </div>
        ))}
        
      </fieldset>
    </div>
	)
}
