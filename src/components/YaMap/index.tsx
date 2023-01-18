import { FC } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './yaMap.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export const YaMap: FC = (  ) => {
	return (
    <YMaps>
      <Map
        className={cx( 'wrap' )}
        defaultState={{
          center: [56.881266, 35.855743],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark defaultGeometry={[56.882053, 35.856560]} />
      </Map>
    </YMaps>
	);
};
