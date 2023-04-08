import styles from './balloon.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';
import { ballons } from '@helpers';

export const Balloon: React.FC = () => {

	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>У нас вы можете приобрести шары</h2>
      <ul className={cx('list')}>
        {ballons.map((item) => (
          <li className={cx('item')}>
            <div className={cx('item__img')}>
              <Image
                wrapperClassName={cx('img')}
                src={`/assets/balloons/${item.img}.png`}
                width="300"
                height="300"
                alt="balloon"
              />
            </div>
            <p className={cx('item__title')}>{item.title}</p>
            {item.subtitle ? (<p className={cx('item__subtitle')}>{item.subtitle}</p>) : null}
            <div className={cx('item__price')}>
              <p className={cx('item__price_text')}>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
	);
};
