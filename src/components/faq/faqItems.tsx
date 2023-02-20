import { useState } from "react";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/faq.module.css";

function FAQItems(props: {
  question: string;
  answer: string;
  //faqStyle: string;
}) {
  const { t } = useTranslation("common");

  const [showAns, setShowAns] = useState(false);
  const clickHandler = () => setShowAns(!showAns);

  const faqBlockStyles = showAns ? myStyles.faq_showAns : myStyles.faq_hideAns;
  const answerTextStyles = showAns ? myStyles.showAnswer : myStyles.hideAnswer;

  return (
    <section
      className={`${myStyles.faq_block} ${faqBlockStyles}`}
      onClick={clickHandler}
    >
      <h4>{t(`${props.question}`)}</h4>
      <div className={answerTextStyles}>
        <p>{t(`${props.answer}`)}</p>
      </div>
    </section>
  );
}
export default FAQItems;
