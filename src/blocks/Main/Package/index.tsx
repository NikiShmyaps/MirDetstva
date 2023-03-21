import styles from './package.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
// @ts-ignore
import { useIntersection } from '@/hooks';
import { Link, Image } from '@components';

export const Package: React.FC = () => {
  
	return (
		<section className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <Link className={cx('item_wrap')} href="/package">
            <div className={cx('item_content')}>
              <Image
                wrapperClassName={cx('item_img')}
                src="./assets/package/magician-hat.png"
                width="80"
                height="80"
                alt="location"
              />
              <span className={cx('item__text')}>Пакеты / Шоу</span>
              <span className={cx('item_arrow')}>
                <Image
                  wrapperClassName={cx('item_arrow-img')}
                  src="./assets/right-arrow.png"
                  width="35"
                  height="35"
                  alt="arrow"
                />
              </span>
            </div>
          </Link>
        </li>
        <li className={cx('item')}>
          <Link className={cx('item_wrap')} href="#" disabled>
            <div className={cx('item_content')}>
              <Image
                wrapperClassName={cx('item_img')}
                src="./assets/package/party.png"
                width="80"
                height="80"
                alt="location"
              />
              <span className={cx('item__text')}>Мастер классы</span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
	);
};
