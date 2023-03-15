import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/contact.module.css";

function ContactUsForm() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.contact_container}>
      <div className={myStyles.contact_imgbox}>
        <Image alt="contact_us" src="/img/contact.svg" layout="fill" />
      </div>
      <form className={myStyles.contact_formPart}>
        <input
          id="name"
          type="text"
          placeholder={`${t("CONTACT_FORM.NAME")}`}
          required
        ></input>
        <input
          id="phone"
          type="text"
          placeholder={`${t("CONTACT_FORM.PHONE")}`}
          required
        ></input>
        <input
          id="email"
          type="text"
          placeholder={`${t("CONTACT_FORM.EMAIL")}`}
          required
        ></input>
        <textarea
          id="message"
          rows={7}
          wrap="soft"
          placeholder={`${t("CONTACT_FORM.MESSAGE")}`}
          required
        ></textarea>
        <button id="submit" type="submit">
          {t("CONTACT_FORM.SUBMIT_BUTTON")}
        </button>
      </form>
    </div>
  );
}
export default ContactUsForm;
