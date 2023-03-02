import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import I18n from "./i18n";
import myStyles from "@/styles/navbar.module.css";

function MainNavbar() {
  const { t } = useTranslation("common");

  //collapse選單收合
  const [showMenu, setShowMenu] = useState(false);
  const navToggler = () => {
    setShowMenu(!showMenu);
  };
  const menuStyles = showMenu ? myStyles.openMenu : myStyles.closeMenu;
  const btnStyles = showMenu
    ? myStyles.menu_btn_cross
    : myStyles.menu_btn_burger;

  return (
    <nav className={myStyles.nav_main_container}>
      <div className={myStyles.nav_logoArea}>
        <Link href="/#" onClick={navToggler}>
          <div className={myStyles.nav_logo}></div>
        </Link>

        <label onClick={navToggler} className={myStyles.menu_btn}>
          <div className={btnStyles}></div>
          <div className={btnStyles}></div>
          <div className={btnStyles}></div>
        </label>
      </div>

      <div className={`${menuStyles} ${myStyles.nav_list_container}`}>
        <ul className={myStyles.leftList}>
          <li>
            <Link href="/about_bolt" onClick={navToggler}>
              {t("nav.about")}
            </Link>
          </li>
          <li>
            <Link href="/technology" onClick={navToggler}>
              {t("nav.technology")}
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={navToggler}>
              {t("nav.faq")}
            </Link>
          </li>
        </ul>

        <span></span>

        <ul className={myStyles.rightList}>
          <li>
            <I18n />
          </li>
          <li>
            <Link
              href=""
              className={myStyles.blockchain_btn}
              onClick={navToggler}
            >
              {t("nav.blockchain")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default MainNavbar;
