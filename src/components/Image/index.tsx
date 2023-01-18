import { FC } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import classNames from 'classnames';

import styles from './image.module.scss';

interface IImageProps extends NextImageProps {
	wrapperClassName?: string;
}

export const Image: FC<IImageProps> = (props) => {
	const { wrapperClassName, src, ...imageProps } = props;
	return (
		<div className={classNames(styles.container, wrapperClassName)}>
			<NextImage src={src} {...imageProps} />
		</div>
	);
};
