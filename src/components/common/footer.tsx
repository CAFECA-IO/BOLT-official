import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/footer.module.css";
//import { getPageIndex } from "@/constants/config";

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
        <Link href="/technology#distributed-audit" scroll={false}>
          <p>{t("technology.title1")}</p>
        </Link>
        <Link href="/technology#zero-knowledge-proof" scroll={false}>
          <p>{t("technology.title2")}</p>
        </Link>
        <Link href="/technology#hybrid-chain-evidence" scroll={false}>
          <p>{t("technology.title3")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.faq")}</h4>
        <Link href="/faq#topics" scroll={false}>
          <p>{t("FAQ.title")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.contactUs")}</h4>
        <Link href="/#contact_us" scroll={false}>
          <p>{t("contactForm.title")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("nav.privacy")}</h4>
        <Link href="/privacy_policy#">
          <p>{t("privacy.title")}</p>
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
              src="/img/bolt_logo_footer.svg"
              width={150}
              height={110}
            />
          </Link>

          <span className={myStyles.borderline}></span>

          <div className={myStyles.footer_text_container}>
            <p className={myStyles.email_text}>
              &emsp;&emsp; service@boltchain.io
            </p>
            <Link href="" className={myStyles.github_text}>
              <p>
                &emsp;&emsp; <span>Github</span>
              </p>
            </Link>
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
