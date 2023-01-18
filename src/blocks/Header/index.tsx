import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Link } from '@components';

export const Header: React.FC = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <Image
          wrapperClassName={cx('image')}
          src="./assets/logo.png"
          width="280"
          height="132"
          alt="logo"
        />
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link href="tel:+79105357486">
              <div className={cx('item-wrap')}>
                <Image
                  wrapperClassName={cx('image__phone')}
                  src="./assets/header/phone.png"
                  width="25"
                  height="25"
                  alt="phone"
                />
                <span className={cx('item__text')}>+7(910)-535-74-86</span>
              </div>
            </Link>
          </li>
          <li className={cx('item')}>
            <Image
              wrapperClassName={cx('image__local')}
              src="./assets/header/place.png"
              width="25"
              height="25"
              alt="place"
            />
            <span className={cx('item__text')}>г. Тверь, ул. Луначарского, д. 32</span>
          </li>
        </ul>

      </div>
    </header>
  )
}