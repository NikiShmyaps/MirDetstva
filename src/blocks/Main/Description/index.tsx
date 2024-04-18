import { FC } from 'react';
import styles from './description.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Link, Image } from '@components';

export const Description: FC = () => {

	return (
		<section className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('image_left')}>
          <Image
            wrapperClassName={cx('image_left-picture')}
            src="./assets/description/childrenLeft.png"
            width="300"
            height="650"
            alt="Дети выглядывают из-за стены"
          />
        </div>
        <div className={cx('info')}>
          <p className={cx('info__text')}>
            Мы собрали лучшие предложения для самых лучших праздников, но это лишь небольшая часть того, что мы можем предложить вам! Узнать про все наши возможности можно пообщавшись с главными специалистами по праздникам в самой локации или по&nbsp;телефону&nbsp;
            <Link className={cx('info_phone')} href="tel:+79105357486">+7&nbsp;(910)&nbsp;535-74-86</Link>
          </p>
          <p className={cx('info__text')}>
            Игровая комната площадью - <b>80&nbsp;кв.м.</b>, в которую входят: зал для торжества; игровой комплекс, где: качель, две горки, лабиринт, бассейн из шариков; комната для приготовления пищи, в которой имеется холодильник, микроволновая печь и конечно туалетная комната с раковиной.
          </p>
          <p className={cx('info__text')}>
            Наша креативная команда с удовольствием организует и проведет самый веселый, интересный и уникальный детский праздник в игровой комнате <b>«МИР&nbsp;ДЕТСТВА»</b>!
          </p>
          <p className={cx('info__text')}>
          - День рождение;<br/>
          - Выпускной;<br/>
          - Тематические вечеринки;<br/>
          - Познавательные шоу;<br/>
          - Мастер-классы разных направлений;
          </p>
        </div>
        <div className={cx('image_right')}>
          <Image
            wrapperClassName={cx('image_right-picture')}
            src="./assets/description/childrenBottom.png"
            width="400"
            height="170"
            alt="Дети лежат"
          />
        </div>
      </div>
    </section>
	);
};
