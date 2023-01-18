import styles from './gallery.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Card } from './Card';
// @ts-ignore
import { useIntersection } from '@/hooks';

export const Gallery: React.FC = () => {
  const item1 = useIntersection(100, cx('item', 'rise-right'));
  const item2 = useIntersection(200, cx('item', 'rise-left'));
  const item3 = useIntersection(100, cx('item', 'rise-right'));
  const item4 = useIntersection(200, cx('item', 'rise-left'));
  const item5 = useIntersection(100, cx('item', 'rise-right'));
  const item6 = useIntersection(200, cx('item', 'rise-left'));
  const item7 = useIntersection(100, cx('item', 'rise-right'));
  const item8 = useIntersection(200, cx('item', 'rise-left'));
  const item9 = useIntersection(100, cx('item', 'rise-right'));
  const item10 = useIntersection(200, cx('item', 'rise-left'));
  const item11 = useIntersection(100, cx('item', 'rise-right'));
  const item12 = useIntersection(200, cx('item', 'rise-left'));
  
	return (
		<section className={cx('container')}>
      <ul className={cx('list')}>
        <li ref={item1} className={cx('item')}>
          <Card 
            img="1"
          />
        </li>
        <li ref={item2} className={cx('item')}>
          <Card 
            img="2"
          />
        </li>
        <li ref={item3} className={cx('item')}>
          <Card 
            img="3"
          />
        </li>
        <li ref={item4} className={cx('item')}>
          <Card 
            img="4"
          />
        </li>
        <li ref={item5} className={cx('item')}>
          <Card 
            img="5"
          />
        </li>
        <li ref={item6} className={cx('item')}>
          <Card 
            img="6"
          />
        </li>
        <li ref={item7} className={cx('item')}>
          <Card 
            img="7"
          />
        </li>
        <li ref={item8} className={cx('item')}>
          <Card 
            img="8"
          />
        </li>
        <li ref={item9} className={cx('item')}>
          <Card 
            img="9"
          />
        </li>
        <li ref={item10} className={cx('item')}>
          <Card 
            img="10"
          />
        </li>
        <li ref={item11} className={cx('item')}>
          <Card 
            img="11"
          />
        </li>
        <li ref={item12} className={cx('item')}>
          <Card 
            img="12"
          />
        </li>
      </ul>
    </section>
	);
};
