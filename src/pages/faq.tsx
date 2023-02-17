import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/faq.module.css";
import FAQItems from "@/components/faq/faqItems";

function FAQPage() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.faq_main_container}>
      <h1>{t("FAQ.title")}</h1>
      <div className={myStyles.faq_items_container}>
        <FAQItems />
      </div>
    </div>
  );
}

export default FAQPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
