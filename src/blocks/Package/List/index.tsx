import styles from './list.module.scss';
import classNames from 'classnames/bind';
// @ts-ignore
import { useIntersection } from '@/hooks';
import { Image } from '@components';

const cx = classNames.bind(styles);

export const List: React.FC = () => {
  const item1 = useIntersection(100, cx('item', 'rise-left'));
  const item2 = useIntersection(200, cx('item', 'rise-right'));
  const item3 = useIntersection(300, cx('item', 'rise-left'));
  const item4 = useIntersection(400, cx('item', 'rise-right'));
  const item5 = useIntersection(100, cx('item', 'rise-left'));
  const item6 = useIntersection(200, cx('item', 'rise-right'));
  const item7 = useIntersection(200, cx('item', 'rise-left'));
  
	return (
		<section className={cx('container')}>
      <h2 className={cx('title')}>Пакеты и Шоу</h2>
      <ul className={cx('list')}>
        <li ref={item1} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Аренда локации <span className={cx('item_title_accent')}>2000&nbsp;руб/час</span> </h3>
              <p className={cx('item_subtitle')}>Что входит в аренду на 3&nbsp;часа:</p>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>(бумажные стаканчики/тарелочки/салфетки/вилки)</span>
                  </div>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Фольгированный шар "Цифра"</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Бесплатный Wi-Fi</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Многоуровневый лабиринт с сухим бассейном</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Интерактивные игры</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Вода/чай/кофе</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Администратор-помощник на вашем празднике</span>
                </li>
              </ul>
              <p className={cx('item_subtext')}>* Так же у нас вы можете воспользоваться услугами шародизайна и тематического украшения локацииы!</p>
            </div>
          </div>
        </li>
        <li ref={item2} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 1</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Аренда Локации</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Анимационная программа</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>1 час - один персонаж на ваш выбор</span>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>10 900 руб</p>
              </div>
            </div>
          </div>
        </li>
        <li ref={item3} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 2</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Аренда Локации</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Анимационная программа</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>1 час - один персонаж на ваш выбор</span>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>13 200 руб</p>
              </div>
            </div>
          </div>
        </li>
        <li ref={item4} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 3</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Шоу-программа на выбор:</span>
                    <ul className={cx('doplist')}>
                      <li className={cx('doplist-item')}>&mdash; Шоу мыльных пузырей</li>
                      <li className={cx('doplist-item')}>&mdash; Челлендж рулетка</li>
                      <li className={cx('doplist-item')}>&mdash; Тик ток бум</li>
                      <li className={cx('doplist-item')}>&mdash; Пижамная вечеринка</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>15 800 руб</p>
              </div>
            </div>
          </div>
        </li>
        <li ref={item5} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 4</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Аренда локации 3 часа</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Анимационное шоу-программа</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>1 час - один персонаж на ваш выбор</span>
                  </div>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Фольгированная дискотека</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>Автоматическая пушка, продолжительность 30&nbsp;мин</span>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>16 900 руб</p>
              </div>
            </div>
          </div>
        </li>
        <li ref={item6} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 5</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Аренда локации</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Анимационное шоу-программа</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>1 час - один персонаж на ваш выбор</span>
                  </div>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Фольгированная дискотека</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>Автоматическая пушка, продолжительность 30&nbsp;мин</span>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>18 900 руб</p>
              </div>
            </div>
          </div>
        </li>
        <li ref={item7} className={cx('item')}>
          <div className={cx('wrap')}>
            <div className={cx('block')}>
              <h3 className={cx('item_title')}>Пакет 6</h3>
              <ul className={cx('item-list')}>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Аренда локации</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Сервировка детского стола</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <span className={cx('item-list__item_text')}>Оформление шарами</span>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Анимационное шоу-программа</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>1 час - один персонаж на ваш выбор</span>
                  </div>
                </li>
                <div className={cx('line')}></div>
                <li className={cx('item-list__item')}>
                  <Image
                    wrapperClassName={cx('check')}
                    src="/assets/check.png"
                    width="30"
                    height="30"
                    alt="check mark"
                  />
                  <div className={cx('item-list__item-block')}>
                    <span className={cx('item-list__item_text')}>Неоновое шоу</span>
                    <span className={cx('item-list__item_text', 'item-list__item_text-accent')}>Автоматическая пушка, продолжительность 30&nbsp;мин</span>
                  </div>
                </li>
              </ul>
              <div className={cx('price')}>
                <p className={cx('price-text')}>21 700 руб</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
	);
};
