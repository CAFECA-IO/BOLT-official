import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/footer.module.css";
//import { getPageIndex } from "../../../contents";

function Footer() {
  const { t } = useTranslation("common");
  /* 
  const pageData = getPageIndex();

  const pageIndexList = pageData.map((v) => {
    return (
      <div className={myStyles.footer_link_item} key={v.title}>
        <h4>{t(`${v.title}`)}</h4>
        <p>{v.items}</p>
      </div>
    );
  }); */

  const linkList = (
    <div className={myStyles.footer_link_list}>
      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.about")}</h4>
        <Link href="/about_bolt#whyBolt">
          <p>{t("about.whyBolt.title")}</p>
        </Link>
        <Link href="/about_bolt#useCase">
          <p>{t("about.useCase.title")}</p>
        </Link>
        <Link href="/about_bolt#news">
          <p>{t("about.news.title")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.technology")}</h4>
        <Link href="/technology#">
          <p>{t("technology.title1")}</p>
        </Link>
        <Link href="/technology#">
          <p>{t("technology.title2")}</p>
        </Link>
        <Link href="/technology#">
          <p>{t("technology.title3")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.faq")}</h4>
        <Link href="/faq">
          <p>{t("FAQ.title")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.contactUs")}</h4>
        <Link href="/#contactForm">
          <p>{t("contactForm.title")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.privary")}</h4>
        <Link href="/privary_policy">
          <p>{t("privary.title")}</p>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <footer className={myStyles.footer_main_container}>
        <div className={myStyles.footer_logo}>
          <Link href="/#" className={myStyles.logo_box}>
            <Image
              alt="bolt_logo"
              src="./img/bolt_logo_footer.svg"
              width={150}
              height={110}
            />
          </Link>

          <span></span>

          <div className={myStyles.footer_text_container}>
            <div className={myStyles.footer_text}>
              <Image
                alt=""
                src="./img/icons/email.svg"
                width={20}
                height={25}
              />
              <p>service@boltchain.io</p>
            </div>
            <div className={myStyles.footer_text}>
              <Image
                alt=""
                src="./img/icons/github.svg"
                width={20}
                height={25}
              />
              <Link href="">
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
        {linkList}

        <div className={myStyles.footer_copyright}>
          <p>Copyright © Bolt. All rights reserved. 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
