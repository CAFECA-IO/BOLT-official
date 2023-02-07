import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import myStyles from "@/styles/navbar.module.css";

function MainNavbar() {
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
    <>
      <nav className={myStyles.nav_main_container}>
        <div>
          <Link href="/#">
            <Image
              alt="bolt_logo"
              src="./img/bolt_logo_main.svg"
              width={160}
              height={45}
            />
          </Link>
        </div>

        <label onClick={navToggler} className={myStyles.menu_btn}>
          <div className={btnStyles}></div>
          <div className={btnStyles}></div>
          <div className={btnStyles}></div>
        </label>

        <div className={`${menuStyles} ${myStyles.nav_list_container}`}>
          <ul>
            <li>
              <Link href="/about_bolt">關於 Bolt</Link>
            </li>
            <li>
              <Link href="/technology">核心技術</Link>
            </li>
            <li>
              <Link href="/faq">常見問題</Link>
            </li>
          </ul>

          <span></span>

          <ul>
            <li>language</li>
            <li>
              <Link href="" className={myStyles.blockchain_btn}>
                區塊鏈瀏覽器
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default MainNavbar;
