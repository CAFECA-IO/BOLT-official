import Image from "next/image";
import Link from "next/link";
import myStyles from "@/styles/footer.module.css";

function Footer() {
  return (
    <>
      <footer className={myStyles.footer_main_container}>
        <div className={myStyles.footer_logo}>
          <Link href="/#" className={myStyles.logo_box}>
            <Image
              alt="bolt_logo"
              src="./img/bolt_logo_footer.svg"
              width={100}
              height={120}
            />
          </Link>

          <span></span>

          <div className={myStyles.footer_text}>
            <Image alt="" src="./img/icons/email.svg" width={20} height={25} />
            <p>service@boltchain.io</p>
          </div>
          <div className={myStyles.footer_text}>
            <Image alt="" src="./img/icons/github.svg" width={20} height={25} />
            <Link href="">
              <p>Github</p>
            </Link>
          </div>
        </div>

        <div className={myStyles.footer_link_list}>List</div>
        <div className={myStyles.footer_copyright}>
          <p>Copyright © Bolt. All rights reserved. 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
