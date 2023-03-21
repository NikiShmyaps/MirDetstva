import { FC } from 'react';
import { Description } from './Description';
import { Gallery } from './Gallery';
import { Package } from './Package';

export const Main: FC = () => {

	return (
		<>
			<Description/>
			<Gallery />
			<Package />
		</>
	);
};
