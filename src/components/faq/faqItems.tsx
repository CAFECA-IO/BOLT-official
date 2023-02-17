import { useTranslation } from "next-i18next";
import myStyles from "@/styles/faq.module.css";

function FAQItems() {
  const { t } = useTranslation("common");

  return (
    <section className={myStyles.faq_block}>
      <h4>{t("FAQ.question1")}</h4>
      <div className={myStyles.answer}>
        <p>{t("FAQ.answer1")}</p>
      </div>
    </section>
  );
}
export default FAQItems;
