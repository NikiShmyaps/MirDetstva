import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, Link } from '@components';

export const Header: React.FC = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <Link href="/">
          <Image
            wrapperClassName={cx('image')}
            src="/assets/logo.png"
            width="500"
            height="240"
            alt="logo"
          />
        </Link>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <Link href="tel:+79105357486">
              <div className={cx('item-wrap')}>
                <Image
                  wrapperClassName={cx('image__icon')}
                  src="/assets/header/phone.png"
                  width="25"
                  height="25"
                  alt="phone"
                />
                <span className={cx('item__text')}>+7 (910) 535-74-86</span>
              </div>
            </Link>
          </li>
          <li className={cx('item')}>
            <a href={'#contacts'}>
              <div className={cx('item-wrap')}>
                <Image
                    wrapperClassName={cx('image__icon')}
                    src="/assets/header/place.png"
                    width="25"
                    height="25"
                    alt="place"
                  />
                  <span className={cx('item__text')}>г. Тверь, ул. Луначарского, д. 32</span>
              </div>
            </a>
          </li>
        </ul>

      </div>
    </header>
  )
}