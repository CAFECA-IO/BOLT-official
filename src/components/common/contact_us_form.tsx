import { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import useInputNumber from "../../lib/hooks/use_input_number";
import myStyles from "@/styles/contact.module.css";

function ContactUsForm() {
  const { t } = useTranslation("common");

  const sendAnimContainer = useRef<HTMLDivElement>(null);
  const successAnimContainer = useRef<HTMLDivElement>(null);

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);
  const [sendAnimation, setSendAnimation] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useInputNumber("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const now = new Date().toLocaleString("zh-TW", { timeZone: "Asia/Taipei" });

  // Info: (20230620 - Julian) check if email is valid
  const emailRule =
    /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const emailIsValid = emailRule.test(inputEmail);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhone(event.target.value);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const messageChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputMessage(event.target.value);
  };

  useEffect(() => {
    const animSend = lottie.loadAnimation({
      container: sendAnimContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/animation/zonafans2.json",
    });

    const animSuccess = lottie.loadAnimation({
      container: successAnimContainer.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/animation/success.json",
    });

    return () => {
      animSend.destroy();
      animSuccess.destroy();
    };
  }, [sendAnimation, sendSuccess, showResult]);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    const failedProcess = async () => {
      setSendSuccess(false);
      setShowResult(true);
      setSubmitBtnDisabled(false);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setSendAnimation(false);
      setShowResult(false);
    };
    try {
      event.preventDefault();

      const emailData = {
        comment: `<h3>姓名：${inputName}</h3><h3>手機：${inputPhone}</h3><h3>Email：${inputEmail}</h3><h3>意見：${inputMessage}</h3><p>${now}<p>`,
      };

      setSubmitBtnDisabled(true);
      setSendAnimation(true);

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(emailData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const result = await res.json();

      const success = result.success;
      if (success) {
        setSendSuccess(true);
        setShowResult(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setSendAnimation(false);
        setSendSuccess(false);
        setShowResult(false);
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputMessage("");
      } else {
        await failedProcess();
      }
      setSubmitBtnDisabled(false);
    } catch (error) {
      await failedProcess();
    }
  };

  const resultPart = showResult ? (
    sendSuccess ? (
      <div className={myStyles.send_result_container}>
        <div className={myStyles.anim_send} ref={successAnimContainer}></div>
        <p>{t("CONTACT_FORM.SUCCESS_MESSAGE")}</p>
      </div>
    ) : (
      <div className={myStyles.send_result_container}>
        <h1>{t("CONTACT_FORM.ERROR_MESSAGE1")}</h1>
        <p>{t("CONTACT_FORM.ERROR_MESSAGE2")}</p>
      </div>
    )
  ) : null;

  const inputPart = sendAnimation ? (
    <div className={myStyles.contact_animation_container}>
      <div className={myStyles.anim_send} ref={sendAnimContainer}></div>
    </div>
  ) : (
    <>
      <input
        id="name"
        type="text"
        placeholder={`${t("CONTACT_FORM.NAME")}`}
        onChange={nameChangeHandler}
        value={inputName || ""}
        required
      ></input>
      <input
        id="phone"
        type="text"
        placeholder={`${t("CONTACT_FORM.PHONE")}`}
        value={inputPhone || ""}
        onChange={phoneChangeHandler}
        required
      ></input>
      <input
        id="email"
        type="text"
        placeholder={`${t("CONTACT_FORM.EMAIL")}`}
        value={inputEmail || ""}
        onChange={emailChangeHandler}
        required
      ></input>
      <textarea
        id="message"
        rows={7}
        wrap="soft"
        placeholder={`${t("CONTACT_FORM.MESSAGE")}`}
        onChange={messageChangeHandler}
        required
      ></textarea>
    </>
  );

  const submitButton = submitBtnDisabled ? (
    <button disabled className={myStyles.btn_send}>
      {t("CONTACT_FORM.SENDING")}
    </button>
  ) : (
    <button
      id="submit"
      type="submit"
      disabled={emailIsValid ? false : true}
      className={myStyles.btn_submit}
    >
      {t("CONTACT_FORM.SUBMIT_BUTTON")}
    </button>
  );

  return (
    <div className={myStyles.contact_container}>
      <div className={myStyles.contact_imgbox}>
        <Image alt="contact_us" src="/img/contact.svg" layout="fill" />
      </div>

      <form
        onSubmit={submitHandler}
        style={{ position: "relative" }}
        className={myStyles.contact_formPart}
      >
        {resultPart}
        {inputPart}
        {submitButton}
        <p style={emailIsValid ? { display: "none" } : { display: "block" }}>
          {t("CONTACT_FORM.EMAIL_VERIFY")}
        </p>
      </form>
    </div>
  );
}
export default ContactUsForm;
