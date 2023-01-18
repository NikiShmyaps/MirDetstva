import React from 'react';
import styles from './link.module.scss';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type LinkComponentProps = {
	id?: string;
	href: string;
	locale?: string;
	scroll?: boolean;
	children?: JSX.Element | string;
	className?: string;
	target?: string;
	disabled?: boolean;
};

export const Link: React.FunctionComponent<LinkComponentProps> = React.memo(function LinkComponent({
	id,
	locale,
	href,
	scroll = true,
	className,
	children,
	target = '_self',
	disabled,
}) {
	const router = useRouter();

	return (
		<NextLink href={href} locale={locale || router.locale} scroll={scroll}>
			<a
				className={`${styles.default} ${className} ${disabled ? styles.disabled : ''}`}
				id={id}
				target={target}
			>
				{children}
			</a>
		</NextLink>
	);
});
