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
          placeholder={`${t("contactForm.name")}`}
          required
        ></input>
        <input
          id="phone"
          type="text"
          placeholder={`${t("contactForm.phone")}`}
          required
        ></input>
        <input
          id="email"
          type="text"
          placeholder={`${t("contactForm.email")}`}
          required
        ></input>
        <textarea
          id="message"
          rows={7}
          wrap="soft"
          placeholder={`${t("contactForm.message")}`}
          required
        ></textarea>
        <button id="submit" type="submit">
          {t("contactForm.button")}
        </button>
      </form>
    </div>
  );
}
export default ContactUsForm;
