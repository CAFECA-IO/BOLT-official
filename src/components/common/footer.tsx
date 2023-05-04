import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/footer.module.css";

function Footer() {
  const { t } = useTranslation("common");
  /* 

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
        <h4>{t("NAV_BAR.ABOUT")}</h4>
        <Link href="/about_bolt#whyBolt" scroll={false}>
          <p>{t("ABOUT.WHY_BOLT.TITLE")}</p>
        </Link>
        <Link href="/about_bolt#useCase">
          <p>{t("ABOUT.USE_CASE.TITLE")}</p>
        </Link>
        <Link href="/news">
          <p>{t("ABOUT.NEWS.TITLE")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("NAV_BAR.TECHNOLOGY")}</h4>
        <Link href="/technology#decentralized-audit" scroll={false}>
          <p>{t("TECHNOLOGY.TITLE1")}</p>
        </Link>
        <Link href="/technology#zero-knowledge-proof" scroll={false}>
          <p>{t("TECHNOLOGY.TITLE2")}</p>
        </Link>
        <Link href="/technology#hybrid-chain-evidence" scroll={false}>
          <p>{t("TECHNOLOGY.TITLE3")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("NAV_BAR.FAQ")}</h4>
        <Link href="/faq#topics" scroll={false}>
          <p>{t("FAQ.TITLE")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("NAV_BAR.CONTACT_US")}</h4>
        <Link href="/#contact_us" scroll={false}>
          <p>{t("CONTACT_FORM.TITLE")}</p>
        </Link>
      </div>

      <div className={myStyles.footer_link_item}>
        <h4>{t("NAV_BAR.PRIVACY")}</h4>
        <Link href="/privacy_policy#">
          <p>{t("PRIVACY.TITLE")}</p>
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
