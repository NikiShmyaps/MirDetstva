import styles from "./list.module.scss";
import classNames from "classnames/bind";
// @ts-ignore
import { useIntersection } from "@/hooks";
import { Image } from "@components";
import { offerPackages } from '@helpers';
import { TPackagesData } from "./types";

const cx = classNames.bind(styles);

export const List: React.FC = () => {
  const packagesData: TPackagesData = offerPackages;

  const refs = [
    useIntersection(100, cx("item", "rise-left")),
    useIntersection(200, cx("item", "rise-right")),
    useIntersection(300, cx("item", "rise-left")),
    useIntersection(400, cx("item", "rise-right")),
    useIntersection(100, cx("item", "rise-left")),
    useIntersection(200, cx("item", "rise-right")),
    useIntersection(200, cx("item", "rise-left")),
  ];

  return (
    <section className={cx("container")}>
      <h2 className={cx("title")}>Пакеты и Шоу</h2>
      <ul className={cx("list")}>
        {packagesData.map((item, index) => (
          <li
            ref={refs[index]}
            className={cx("item")}
            key={index}
          >
            <div className={cx("wrap")}>
              <div className={cx("block")}>
                <h3 className={cx("item_title")}>
                  {item.title}
                  {item?.additionalTitle && (
                    <span className={cx("item_title_accent")}>
                      {" "}{item.additionalTitle}
                    </span>
                  )}
                </h3>
                {item?.subtitle && (
                  <p className={cx("item_subtitle")}>
                    {item.subtitle}
                  </p>
                )}
                <ul className={cx("item-list")}>
                  {item.list.map((subItem, i) => (
                    <>
                      <li className={cx("item-list__item")}>
                        <Image
                          wrapperClassName={cx("check")}
                          src="/assets/check.png"
                          width="25"
                          height="25"
                          alt="check mark"
                        />
                        <div className={cx("item-list__item-block")}>
                          <span className={cx("item-list__item_text")}>
                            {subItem.title}
                          </span>
                          {subItem?.description && (
                            <span
                              className={cx(
                                "item-list__item_text",
                                "item-list__item_text-accent"
                              )}
                            >
                            {subItem.description}
                          </span>
                          )}
                          {subItem?.dopList && (
                            <ul className={cx("doplist")}>
                              {subItem.dopList.map((dopItem) => (
                                <li className={cx("doplist-item")}>
                                  {dopItem}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                      {i !== item.list.length - 1 && (
                        <div className={cx("line")}></div>
                      )}
                    </>
                  ))}
                </ul>
                {item?.subtext && (
                  <p className={cx("item_subtext")}>
                    * Так же у нас вы можете воспользоваться услугами шародизайна и
                    тематического украшения локации!
                  </p>
                )}
                {item?.price && (
                  <div className={cx("price")}>
                    <p className={cx("price-text")}>{item.price}</p>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
