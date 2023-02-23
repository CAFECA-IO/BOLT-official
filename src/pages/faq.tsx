import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "@/styles/faq.module.css";
import FAQItems from "@/components/faq/faqItems";
import { getFaqData } from "contents";

function FAQPage() {
  const { t } = useTranslation("common");

  //const [showAnsIndex, setShowAnsIndex] = useState(null);
  //const clickHandler = () => setShowAnsIndex();

  //const faqBlockStyles = showAns ? myStyles.faq_showAns : myStyles.faq_hideAns;
  //const answerTextStyles = showAns ? myStyles.showAnswer : myStyles.hideAnswer;

  const faqData = getFaqData();
  const faqList = faqData.map((v) => {
    return (
      <FAQItems
        key={v.id}
        question={v.question}
        answer={v.answer}
        //faqStyle={answerTextStyles}
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
