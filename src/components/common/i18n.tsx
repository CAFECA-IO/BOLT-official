import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import myStyles from "@/styles/navbar.module.css";

function I18n() {
  const { t } = useTranslation("common");
  const router = useRouter();

  //選單收合
  const [showSubMenu, setShowSubMenu] = useState(false);
  const clickHandler = () => {
    setShowSubMenu(!showSubMenu);
  };
  const subMenuStyles = showSubMenu
    ? myStyles.langmenu_open
    : myStyles.langmenu_close;

  const textStyles = showSubMenu
    ? myStyles.lang_text_open
    : myStyles.lang_text_close;

  return (
    <>
      <div className={myStyles.lang_icon_box} onClick={clickHandler}>
        <Image alt="" src="/img/icons/globe.svg" width={44} height={44} />
      </div>

      <div className={textStyles} onClick={clickHandler}>
        {t("nav.language")}
      </div>

      <div className={subMenuStyles}>
        <div className={myStyles.lang_backBtn} onClick={clickHandler}></div>

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
