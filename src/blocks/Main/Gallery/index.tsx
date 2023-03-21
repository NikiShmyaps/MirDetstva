import styles from './gallery.module.scss';
import classNames from 'classnames/bind';
import { Link, Image } from '@components';

const cx = classNames.bind(styles);

export const Gallery: React.FC = () => {
  
	return (
		<section className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <Link className={cx('item_wrap')} href="/gallery">
            <div className={cx('item_content')}>
              <Image
                wrapperClassName={cx('item_img')}
                src="./assets/mainGallery/paint-roller.png"
                width="60"
                height="60"
                alt="location"
              />
              <span className={cx('item__text')}>Наша Локация</span>
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
                src="./assets/mainGallery/cake.png"
                width="60"
                height="60"
                alt="cake"
              />
              <span className={cx('item__text')}>Дни рождения</span>
            </div>
          </Link>
        </li>
        <li className={cx('item')}>
          <Link className={cx('item_wrap')} href="#" disabled>
            <div className={cx('item_content')}>
              <Image
                wrapperClassName={cx('item_img')}
                src="./assets/mainGallery/balloons.png"
                width="60"
                height="60"
                alt="baloons"
              />
              <span className={cx('item__text')}>Шары</span>
              {/* <span className={cx('item_arrow')}>
                <Image
                  wrapperClassName={cx('item_arrow-img')}
                  src="./assets/right-arrow.png"
                  width="35"
                  height="35"
                  alt="arrow"
                />
              </span> */}
            </div>
          </Link>
        </li>
        <li className={cx('item')}>
          <Link className={cx('item_wrap')} href="#" disabled>
            <div className={cx('item_content')}>
              <Image
                wrapperClassName={cx('item_img')}
                src="./assets/mainGallery/price-tag.png"
                width="60"
                height="60"
                alt="price"
              />
              <span className={cx('item__text')}>Цены</span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
	);
};
