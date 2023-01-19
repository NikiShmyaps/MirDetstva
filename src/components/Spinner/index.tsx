import { FC } from 'react';
import styles from './spinner.module.scss';
import classNames from 'classnames/bind';
import { BeatLoader } from 'react-spinners';

const cx = classNames.bind(styles);

interface ISpinnerProps {
	wrapperClassName?: string;
	size?: number;
	color?: string;
}

export const Spinner: FC<ISpinnerProps> = ({ wrapperClassName, size = 15, color = '#dc5224' }) => {
	return (
		<div className={cx('spinner_wrapper', { [`${wrapperClassName}`]: wrapperClassName })}>
			<BeatLoader size={size} color={color} />
		</div>
	);
};
