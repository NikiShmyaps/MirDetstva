import { FC } from 'react';
import styles from './main.module.scss';
import { Description } from './Description';
import { Gallery } from './Gallery';
import { Package } from './Package';
import {Image} from "@components";

export const Main: FC = () => {

	return (
		<>
			<Description/>
			<div className={styles.snowPresent}>
				<Image
					wrapperClassName={styles.snowPresent_img}
					src="./assets/masterClass.jpg"
					width="550"
					height="800"
					alt="master-class"
				/>
				<Image
					wrapperClassName={styles.snowPresent_img}
					src="./assets/snow.jpg"
					width="550"
					height="800"
					alt="snow-present"
				/>
			</div>
			<Gallery />
			<Package />
		</>
	);
};
