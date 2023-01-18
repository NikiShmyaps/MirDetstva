import { Image } from '@components';
import styles from './card.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

type CardProps = {
	img: string;
	width?: string;
	height?: string;
};

export const Card: React.FC<CardProps> = ({
	img,
	width,
	height,
}) => {
	return (
    <div className={cx('img_block')}>
      <div className={cx('img')}>
        <Image
          wrapperClassName={cx('img')}
          src={`./assets/gallery/${img}.jpeg`}
          // width={`${width}`}
          // height={`${height}`}
          width="550"
          height="700"
          alt={`${img}`}
        />
      </div>
    </div>
	);
};
