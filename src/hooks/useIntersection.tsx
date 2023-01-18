import { useEffect, useRef } from 'react';
// @ts-ignore
import { IntersectionInitizalize } from '@/script';

export function useIntersection(delay: number, className: string[] | string, options?: any) {
	const ref = useRef();

	useEffect(() => {
		IntersectionInitizalize(ref.current, delay, className, options);
	}, [ref]);

	return ref;
}
