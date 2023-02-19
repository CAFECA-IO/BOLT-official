import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import myStyles from "@/styles/navbar.module.css";

function I18n() {
  const router = useRouter();

  //選單收合
  const [showSubMenu, setShowSubMenu] = useState(false);
  const clickHandler = () => {
    setShowSubMenu(!showSubMenu);
  };
  const subMenuStyles = showSubMenu
    ? myStyles.langmenu_open
    : myStyles.langmenu_close;

  return (
    <>
      <div className={myStyles.lang_icon_box} onClick={clickHandler}>
        <Image alt="" src="/img/icons/globe.svg" width={44} height={44} />
      </div>

      <div className={subMenuStyles}>
        <ul className={myStyles.lang_dropmenu}>
          <li>
            <Link
              href={router}
              onClick={clickHandler}
              scroll={false}
              locale="en"
            >
              English
            </Link>
          </li>
          <li>
            <Link
              href={router}
              onClick={clickHandler}
              scroll={false}
              locale="zh-TW"
            >
              繁體中文
            </Link>
          </li>
          <li>
            <Link
              href={router}
              onClick={clickHandler}
              scroll={false}
              locale="zh-CN"
            >
              简体中文
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default I18n;
