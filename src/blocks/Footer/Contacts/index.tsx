import styles from './contacts.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image, YaMap, Link } from '@components';
// @ts-ignore
import { useIntersection } from '@/hooks';

export const Contacts: React.FC = () => {

  const place = useIntersection(200, cx('item', 'rise-left'));
	const time = useIntersection(400, cx('item', 'rise-left'));
	const phone = useIntersection(600, cx('item', 'rise-left'));
  const vk = useIntersection(800, cx('item', 'rise-left'));

	return (
    <>
      <section className={cx('container')}>
        <div className={cx('childrens')}>
          <Image
            wrapperClassName={cx('childrens_img')}
            src="/assets/footerChildren.png"
            width="900"
            height="190"
            alt="childrens"
          />
        </div>
        <div className={cx('wrapper')}>
          <div className={cx('map')}>
            <YaMap />
          </div>
          <div className={cx('contacts')}>
            <h2 className={cx('title')}>Приходите к нам, <br/><span className={cx('title_gradient')}>будет весело!</span></h2>
            <ul className={cx('list')}>
              <li ref={place} className={cx('item')}>
                <Image
                  wrapperClassName={cx('image__local')}
                  src="/assets/header/place.png"
                  width="28"
                  height="28"
                  alt="place"
                />
                <span className={cx('item__text')}>г. Тверь, ул. Луначарского, д. 32</span>
              </li>
              <li ref={time} className={cx('item')}>
                <Image
                  wrapperClassName={cx('image__clock')}
                  src="/assets/header/clock.png"
                  width="27"
                  height="27"
                  alt="clock"
                />
                <span className={cx('item__text')}>Ежедневно 10:00-21:00 <br/> По предварительной записи</span>
              </li>
              <li ref={phone} className={cx('item')}>
                <Link href="tel:+79105357486">
                  <div className={cx('item-wrap')}>
                    <Image
                      wrapperClassName={cx('image__phone')}
                      src="/assets/header/phone.png"
                      width="25"
                      height="25"
                      alt="phone"
                    />
                    <span className={cx('item__text')}>+7(910)-535-74-86</span>
                  </div>
                </Link>
              </li>
              <li ref={vk} className={cx('item')}>
                <Link href="https://vk.com/cb__lab">
                  <div className={cx('item-wrap')}>
                    <Image
                      wrapperClassName={cx('image__vk')}
                      src="/assets/vk.svg"
                      width="40"
                      height="40"
                      alt="vk"
                    />
                    <span className={cx('item__text')}>Наша группа ВКонтакте</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
    </>
	);
};
