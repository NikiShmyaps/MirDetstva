import styles from './price.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import { Image } from '@components';

export const Price: React.FC = () => {

	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>Наши предложения</h2>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'red')}></span>
            <h3 className={cx('item__title')}>Аренда локации под день рождения</h3>
          </div>
          <div className={cx('item__block')}>
            <p className={cx('item__description')}><span className={cx('bold')}>Цена: </span>1500 руб/час (минимально 2 часа)</p>
            <p className={cx('item__description')}><span className={cx('bold')}>Время: </span>с 10-13, с 14-17, с 18-21</p>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'yellow')}></span>
            <h3 className={cx('item__title')}>Игра в игровом комплексе</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}><span className={cx('bold')}>Цена:</span> 1 час 500 руб/ребенок</p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'green')}></span>
            <h3 className={cx('item__title')}>Аниматоры</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ОДИН ПЕРСОНАЖ </span>от 2900 до 3700 руб/час включая выезд<br/>(до 8 детей)<br/> Свыше 8 детей — двойная цена или заказ 2-х персонажей</p>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ВИП АНИМАТОР</span> — 4500&nbsp;руб/час</p>
              <p className={cx('item__description')}>*Анимационная программа включающая 2 аниматора — 5500&nbsp;рублей</p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'darkGreen')}></span>
            <h3 className={cx('item__title')}>Шоу</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}>
                - <span className={cx('bold')}>ФОЛЬГИРОВАННАЯ ДИСКОТЕКА</span> (автоматическая пушка) 5900&nbsp;руб/30 минут
                <br/>(шоу проводиться командой из 2-х человек в игровой форме, музыкальное сопровождение)
              </p>
              <p className={cx('item__description')}></p>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ШАР-ШОУ</span> 6500руб/30 минут</p>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ПОРОЛОНОВОЕ ШОУ</span> 9000руб/30 минут</p>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ШОУ МЫЛЬНЫХ ПУЗЫРЕЙ</span> 5500руб/30 минут</p>
              <p className={cx('item__description')}>- <span className={cx('bold')}>ШОУ ПРОФЕССОРА мИнзурки</span> 6500руб/30 минут (7+)</p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'blue')}></span>
            <h3 className={cx('item__title')}>ПАКЕТ «ВЕСЕЛЫЕ ЧАСЫ»</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}>
                <span className={cx('bold')}>90 мин</span> - включает в себя Мастер-класс  40 мин (МК ОВЕРШЕЙК)+ игра в игровой. Стоимость 1000 рублей
              </p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'purple')}></span>
            <h3 className={cx('item__title')}>ПАКЕТ «ВКУСНЫЕ ВЫХОДНЫЕ»</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}>
                <span className={cx('bold')}>120 мин</span> - включает в себя МК 60 мин (АРТ-КАПКЕЙК) + игра в игровой 60 мин. Стоимость 1500 руб
              </p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
        <li className={cx('item')}>
          <div className={cx('item__head')}>
            <span className={cx('elem', 'darkRed')}></span>
            <h3 className={cx('item__title')}>МАСТЕР-КЛАССЫ</h3>
          </div>
          <div className={cx('item__block')}>
            <div className={cx('item__info')}>
              <p className={cx('item__description')}>
                <span className={cx('bold')}>МК «ОВЕРШЕЙК» (фрикшейк)</span> - фантастический молочный коктейль с огромной шапкой из сладостей (кол-во 1 шт). Дети +5 (детки по младше в сопровождении с родителем)
              </p>
              <p className={cx('item__description')}>
                <span className={cx('bold')}>МК «АРТ-КАПКЕЙК»</span> - украшение капкейков пластичным шоколадом и мастикой (в коробочка 4 шт).  Дети +5 (детки по младше в сопровождении с родителем)
              </p>
            </div>
          </div>
        </li>
        <div className={cx('line')}></div>
      </ul>
    </section>
	);
};
