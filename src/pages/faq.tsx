import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/faq.module.css";
import FAQItems from "@/components/faq/faqItems";
import { getFaqData } from "@/constants/config";

function FAQPage() {
  const { t } = useTranslation("common");

  const [showAnsIndex, setShowAnsIndex] = useState("");

  const faqData = getFaqData();

  const faqList = faqData.map((v) => {
    const faqBlockStyles =
      v.id === showAnsIndex ? myStyles.faq_showAns : myStyles.faq_hideAns;
    const answerAreaStyles =
      v.id === showAnsIndex ? myStyles.showAnswer : myStyles.hideAnswer;

    return (
      <FAQItems
        key={v.id}
        id={v.id}
        question={v.question}
        answer={v.answer}
        faqBlockStyles={faqBlockStyles}
        answerAreaStyles={answerAreaStyles}
        showAnsIndex={showAnsIndex}
        setShowAnsIndex={setShowAnsIndex}
      />
    );
  });

  return (
    <div className={myStyles.faq_main_container}>
      <h1>{t("FAQ.title")}</h1>
      <div className={myStyles.faq_items_container}>{faqList}</div>
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
