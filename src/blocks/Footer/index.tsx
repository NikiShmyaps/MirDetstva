import { FC } from 'react';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Contacts } from './Contacts';
import { FormCallback } from './FormCallback';

export const Footer: FC = () => {

	return (
		<>
			<div className={cx('grayLight')} id='contacts'>
				<Contacts />
			</div>
      <FormCallback/>
		</>
	);
};
