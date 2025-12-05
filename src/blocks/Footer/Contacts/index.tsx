import { FC } from 'react';
import classNames from 'classnames/bind';

import { Image, YaMap, Link } from '@components';
// @ts-ignore
import { useIntersection } from '@/hooks';
import { contacts } from '@helpers';

import styles from './contacts.module.scss';
import { TItem } from './types';

const cx = classNames.bind(styles);

export const Contacts: FC = () => {
  const refs = contacts.map((_, i) => {
    const delay = 200 + i * 200;
    return useIntersection(delay, cx('item', 'rise-left'));
  });

  const content = ({name, title, width, height, icon}: TItem) => (
    <>
      <Image
        wrapperClassName={cx(`image__${name}`)}
        src={`/assets/${icon}`}
        width={width}
        height={height}
        alt={name}
      />
      <span className={cx('item__text')}>
        {title}
      </span>
    </>
  );

  return (
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
          <h2 className={cx('title')}>
            Приходите к нам, <br/>
            <span className={cx('title_gradient')}>
              будет весело!
            </span>
          </h2>
          <ul className={cx('list')}>
            {contacts.map((item, index) => (
              <li
                key={index}
                ref={refs[index]}
                className={cx('item')}
              >
                {item.link ? (
                  <Link href={item.link}>
                    <div className={cx('item-wrap')}>
                      {content(item)}
                    </div>
                  </Link>
                ) : (
                  content(item)
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
