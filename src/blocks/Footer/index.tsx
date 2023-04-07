import { FC, useState, useEffect } from 'react';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Contacts } from './Contacts';
import { FormCallback } from './FormCallback';
import { Image } from '@components';

export const Footer: FC = () => {

	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		showForm
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = '');
	}, [showForm]);

	return (
		<>
			<h2 className={cx('application')} onClick={() => setShowForm(true)}>
				Оставить заявку
				<Image
					wrapperClassName={cx('arrow')}
					src="./assets/right-arrow.png"
					width="35"
					height="35"
					alt="arrow"
				/>
			</h2>
			<div className={cx('grayLight')} id='contacts'>
				<Contacts />
			</div>
      <FormCallback showForm={showForm} setShowForm={setShowForm}/>
		</>
	);
};
