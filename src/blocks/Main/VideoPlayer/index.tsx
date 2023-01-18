import styles from './videoPlayer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

export const VideoPlayer: React.FC = () => {

	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>Открытие</h2>
      <video
        controls
        loop
        className={cx('wrap')}
      >
        <source src={'./assets/videos/video.mp4'} type="video/mp4"/>
      </video>
    </section>
	);
};
