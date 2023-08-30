import styles from "./popup.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { Image } from "@components";

interface IPopupCallback {
  active: boolean;
  onClick: any;
}

export const Popup: React.FC<IPopupCallback> = ({ active, onClick }) => {
  return (
    <div className={cx("block", { ["active"]: active })}>
      <div className={cx("container")}>
        <div className={cx("close")} onClick={() => onClick(false)}>
          <Image
            wrapperClassName={cx("img")}
            src="/assets/close.png"
            width="40"
            height="40"
            alt="close"
          />
        </div>
        <Image
          wrapperClassName={cx("img")}
          src="./assets/package/main.jpg"
          width="800"
          height="1000"
          alt="circle"
        />
      </div>
    </div>
  );
};
