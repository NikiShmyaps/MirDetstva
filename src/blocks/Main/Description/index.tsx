import styles from './description.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

export const Description: React.FC = () => {

	return (
		<section className={cx('container')}>
      <div className={cx('info')}>
        <Image
          wrapperClassName={cx('image-title')}
          src="./assets/description/title.png"
          width="500"
          height="70"
          alt="Мир Детства"
        />
        <p className={cx('info__text')}>
          Праздник проведённый в Мире Детства - это не просто торжественное мероприятие. Это событие, которое останется с вами, как памятное событие на всю жизнь! О празднике позаботится наш дружный коллектив. Море веселья!
        </p>
        <p className={cx('info__subtitle')}>
          Если вы думаете, где отпраздновать ваше торжество, проведите его с&nbsp;нами&nbsp;- <br/>в <span className={cx('info__subtitle_gradient')}>МИРЕ ДЕТСТВА</span>!
        </p>
      </div>
      <div className={cx('image-wrap')}>
        <Image
          wrapperClassName={cx('image')}
          src="./assets/description/img.png"
          width="400"
          height="350"
          alt="description"
        />
      </div>
    </section>
	);
};
