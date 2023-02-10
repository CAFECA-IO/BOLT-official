import Image from "next/image";
import myStyles from "@/styles/navbar.module.css";

function I18n() {
  return (
    <>
      <div className={myStyles.lang_icon_box}>
        <Image alt="" src="./img/icons/globe.svg" width={44} height={44} />
      </div>

      <div className={myStyles.lang_dropmenu}>
        <ul>
          <li>English</li>
          <li>繁體中文</li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
export default I18n;
