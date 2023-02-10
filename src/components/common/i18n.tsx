import { useState } from "react";
import Image from "next/image";
import myStyles from "@/styles/navbar.module.css";

function I18n() {
  //collapse選單收合
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
        <Image alt="" src="./img/icons/globe.svg" width={44} height={44} />
      </div>

      <div className={subMenuStyles}>
        <ul className={myStyles.lang_dropmenu}>
          <li>English</li>
          <li>繁體中文</li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
export default I18n;
