import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/faq.module.css";
interface IFaqItemsParams {
  id: string;
  question: string;
  answer: string[];
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

  const answerList = answer.map((v) => {
    return <p key={String(v)}>{t(v)}</p>;
  });

  return (
    <section
      className={`${myStyles.faq_block} ${faqBlockStyles}`}
      onClick={clickHandler}
    >
      <h4>{t(question)}</h4>
      <div className={answerAreaStyles}>{answerList}</div>
    </section>
  );
}
export default FAQItems;
