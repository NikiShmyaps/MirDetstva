import styles from './main.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Description } from './Description';
import { Gallery } from './Gallery';
import { Contacts } from './Contacts';
import { VideoPlayer } from './VideoPlayer';
import { FormCallback } from './FormCallback';
import { Price } from './Price';

export const Main: React.FC = () => {

	return (
		<>
			<Description/>
			<Gallery />
			<VideoPlayer />
			<Price />
			<div className={cx('grayLight')}>
				<Contacts />
			</div>
				<FormCallback/>
		</>
	);
};
