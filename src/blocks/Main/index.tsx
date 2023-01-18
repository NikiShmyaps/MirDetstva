import styles from './main.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Description } from './Description';
import { Gallery } from './Gallery';
import { Contacts } from './Contacts';
import { VideoPlayer } from './VideoPlayer';
import { FormCallback } from './FormCallback';

export const Main: React.FC = () => {

	return (
		<>
			<Description/>
			<Gallery />
			<VideoPlayer />
			<div className={cx('grayLight')}>
				<Contacts />
			</div>
				<FormCallback/>
		</>
	);
};
