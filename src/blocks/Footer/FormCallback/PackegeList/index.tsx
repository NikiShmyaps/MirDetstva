import { FC, ChangeEvent } from 'react';
import styles from './packegeList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

interface IPackegeList {
	formik: any
}

export const PackegeList: FC<IPackegeList> = ({ formik }) => {
  const packeges = ["Пакет 1", "Пакет 2", "Пакет 3", "Пакет 4", "Пакет 5"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;

    if ( checked ) {
      formik.setFieldValue("packeges", [...formik.values.packeges, name]);
    } else {
			formik.setFieldValue(
				"packeges",
				[...formik.values.packeges.filter((item: string) => item !== name)]
			);
    }
  }

	return (
    <div className={cx('input_group')} >
      <p className={cx('input_title', 'group_title')}>Пакеты</p>
      <ul className={cx('group')}>
        {packeges.map((packege) => (
          <li className={cx('group__item')} key={packege}>
            <label className={cx('input_title', 'group__item_check')} htmlFor={packege}>{packege}
              <input
                id={packege}
                type={'checkbox'}
                name={packege}
                onChange={handleChange}
                className={cx('group__input')}
              />
              <div className={cx('group__input_main')}>
                <Image
                  wrapperClassName={cx('checked_img')}
                  src="/assets/checkForm.png"
                  width="20"
                  height="20"
                  alt="check"
                />
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
	)
}
