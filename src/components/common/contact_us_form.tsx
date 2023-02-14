import Image from "next/image";
import myStyles from "@/styles/Home.module.css";

function ContactUsForm() {
  return (
    <div className={myStyles.contact_container}>
      <div>
        <Image
          alt="contact_us"
          src="/img/contact.svg"
          width={400}
          height={400}
        />
      </div>
      <form className={myStyles.contact_formPart}>
        <input id="name" type="text" placeholder="name" required></input>
        <input id="phone" type="text" placeholder="phone" required></input>
        <input id="email" type="text" placeholder="Email" required></input>
        <textarea
          id="message"
          rows={5}
          wrap="soft"
          placeholder="message"
          required
        ></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  );
}
export default ContactUsForm;
