import { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
//import sendAnimation from "../../../public/animation/zonafans2.json";
import successAnimation from "../../../public/animation/success.json";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import useInputNumber from "../../lib/hooks/use_input_number";
import myStyles from "@/styles/contact.module.css";

function ContactUsForm() {
  const { t } = useTranslation("common");

  const router = useRouter();
  const animContainer = useRef<HTMLDivElement>(null);

  const [sendAnimation, setSendAnimation] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    const animSend = lottie.loadAnimation({
      container: animContainer.current!,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../../public/animation/zonafans2.json"),
    });

    return () => {
      animSend.destroy();
      //setSendSuccess(false);
    };
  }, [sendSuccess]);

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useInputNumber("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailData = {
      comment: `<h3>姓名：${inputs.name}</h3>
                  <h3>手機：${inputPhone}</h3>
                  <h3>Email：${inputs.email}</h3>
                  <h3>意見：${inputs.message}</h3>`,
    };

    fetch("/api/send_email", {
      method: "POST",
      body: JSON.stringify(emailData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        console.log(res);

        setInputs({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        //alert("已送出");
        setSendAnimation(true);
      })
      .then((data) => {
        //這裡可以顯示一些訊息，或是結束指示動畫…
        setSendSuccess(true);
        console.log(data);
      })
      .catch(() => {
        router.push("/404");
      });
  };

  const inputPart = sendAnimation ? (
    <div className={myStyles.contact_animation_container}>
      <div className={myStyles.anim_send} ref={animContainer}></div>
    </div>
  ) : (
    <>
      <input
        id="name"
        type="text"
        placeholder={`${t("CONTACT_FORM.NAME")}`}
        onChange={(event) => setInputs({ ...inputs, name: event.target.value })}
        value={inputs.name || ""}
        required
      ></input>
      <input
        id="phone"
        type="text"
        placeholder={`${t("CONTACT_FORM.PHONE")}`}
        //value={inputs.phone || ""}
        value={inputPhone}
        onChange={(event) =>
          //setInputs({ ...inputs, phone: event.target.value })
          setInputPhone(event.target.value)
        }
        required
      ></input>
      <input
        id="email"
        type="text"
        placeholder={`${t("CONTACT_FORM.EMAIL")}`}
        value={inputs.email || ""}
        onChange={(event) =>
          setInputs({ ...inputs, email: event.target.value })
        }
        required
      ></input>
      <textarea
        id="message"
        rows={7}
        wrap="soft"
        placeholder={`${t("CONTACT_FORM.MESSAGE")}`}
        onChange={(event) =>
          setInputs({ ...inputs, message: event.target.value })
        }
        required
      ></textarea>
    </>
  );

  const submitButton = sendAnimation ? (
    <button disabled className={myStyles.btn_send}>
      發送中...
    </button>
  ) : (
    <button id="submit" type="submit" className={myStyles.btn_submit}>
      {t("CONTACT_FORM.SUBMIT_BUTTON")}
    </button>
  );

  return (
    <div className={myStyles.contact_container}>
      <div className={myStyles.contact_imgbox}>
        <Image alt="contact_us" src="/img/contact.svg" layout="fill" />
      </div>
      <form onSubmit={submitHandler} className={myStyles.contact_formPart}>
        {inputPart}
        {submitButton}
      </form>
    </div>
  );
}
export default ContactUsForm;
