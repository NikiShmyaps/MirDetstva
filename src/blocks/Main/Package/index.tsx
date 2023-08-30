import { useEffect, useState } from "react";
import styles from "./package.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { Link, Image } from "@components";
import { Popup } from "./popup";

export const Package: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    showPopup
      ? ((document.body.style.overflow = "hidden"),
        (document.body.style.left = "0"))
      : ((document.body.style.overflow = ""), (document.body.style.left = ""));
  }, [showPopup]);

  return (
    <section className={cx("container")}>
      <ul className={cx("list")}>
        <li className={cx("item")}>
          <Link className={cx("item_wrap")} href="/package">
            <div className={cx("item_content")}>
              <Image
                wrapperClassName={cx("item_img")}
                src="./assets/package/magician-hat.png"
                width="60"
                height="60"
                alt="location"
              />
              <span className={cx("item__text")}>Пакеты / Шоу</span>
              <span className={cx("item_arrow")}>
                <Image
                  wrapperClassName={cx("item_arrow-img")}
                  src="./assets/right-arrow.png"
                  width="35"
                  height="35"
                  alt="arrow"
                />
              </span>
            </div>
          </Link>
        </li>
        <li className={cx("item")}>
          <Link className={cx("item_wrap")} href="#" disabled>
            <div className={cx("item_content")}>
              <Image
                wrapperClassName={cx("item_img")}
                src="./assets/package/party.png"
                width="60"
                height="60"
                alt="location"
              />
              <span className={cx("item__text")}>Мастер классы</span>
            </div>
          </Link>
        </li>
        <li className={cx("item")}>
          <div className={cx("item_wrap")} onClick={() => setShowPopup(true)}>
            <div className={cx("item_content")}>
              <Image
                wrapperClassName={cx("item_img")}
                src="./assets/package/circle.png"
                width="60"
                height="60"
                alt="location"
              />
              <span className={cx("item__text")}>Наши кружки</span>
              <span className={cx("item_arrow")}>
                <Image
                  wrapperClassName={cx("item_arrow-img")}
                  src="./assets/right-arrow.png"
                  width="35"
                  height="35"
                  alt="arrow"
                />
              </span>
            </div>
          </div>
        </li>
      </ul>
      <Popup active={showPopup} onClick={setShowPopup} />
    </section>
  );
};
