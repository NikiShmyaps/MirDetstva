import { Header } from '@blocks';
import styles from './layoutWrapper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { FC } from 'react';
import { Meta } from '@components';
type LayoutWrapperPropTypes = {
	children: JSX.Element;
};

export const LayoutWrapper: FC<LayoutWrapperPropTypes> = ({
	children,
}) => {
	return (
		<>
			<div id="root" className={cx('root')}>
        <Meta />
				<Header />
				<div className={cx('main')}>{children}</div>
				{/* <Footer /> */}
			</div>
		</>
	);
};
