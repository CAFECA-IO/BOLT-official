import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/faq.module.css";
interface IFaqItemsParams {
  id: string;
  question: string;
  answer: string;
  faqBlockStyles: string;
  answerAreaStyles: string;
  showAnsIndex: string;
  setShowAnsIndex: Dispatch<SetStateAction<string>>;
}

function FAQItems({
  id,
  question,
  answer,
  faqBlockStyles,
  answerAreaStyles,
  showAnsIndex,
  setShowAnsIndex,
}: IFaqItemsParams) {
  const { t } = useTranslation("common");

  const clickHandler = () => {
    if (showAnsIndex !== id) {
      setShowAnsIndex(id);
    } else {
      setShowAnsIndex("");
    }
  };

  return (
    <section
      className={`${myStyles.faq_block} ${faqBlockStyles}`}
      onClick={clickHandler}
    >
      <h4>{t(question)}</h4>
      <div className={answerAreaStyles}>
        <p>{t(answer)}</p>
      </div>
    </section>
  );
}
export default FAQItems;
