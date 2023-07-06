import { FC, ChangeEvent } from 'react';
import styles from './packegeList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

interface IPackegeList {
	formik: any
}

export const PackegeList: FC<IPackegeList> = ({ formik }) => {
  const packeges = [
    {
      title: "Пакет 1",
      id: "packege1"
    },
    {
      title: "Пакет 2",
      id: "packege2"
    },
    {
      title: "Пакет 3",
      id: "packege3"
    },
    {
      title: "Пакет 4",
      id: "packege4"
    },
    {
      title: "Пакет 5",
      id: "packege5"
    },
  ];

  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   const { checked, name } = e.target;

  //   if ( checked ) {
  //     formik.setFieldValue("packeges", [...formik.values.packeges, name]);
  //   } else {
	// 		formik.setFieldValue(
	// 			"packeges",
	// 			[...formik.values.packeges.filter((item: string) => item !== name)]
	// 		);
  //   }
  // }

	return (
    <div className={cx('input_group')} >
      <p className={cx('input_title', 'group_title')}>Пакеты</p>
      <fieldset
        className={cx('date-list')}
        id="packege"
        {...formik.getFieldProps("packege")}
      >
        <ul className={cx('group')}>
          {packeges.map((packege) => (
            <li className={cx('group__item')} key={packege.id}>
              <label className={cx('input_title', 'group__item_check')} htmlFor={packege.id}>{packege.title}
                <input
                  id={packege.id}
                  type='radio'
                  name='packege'
                  value={packege.title}
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
      </fieldset>
    </div>
	)
}
