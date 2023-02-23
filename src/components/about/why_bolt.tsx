import Image from "next/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";

function WhyBolt() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.ticket_holder}>
      <div className={myStyles.ticket}>
        <h3>{t("about.whyBolt.title1")}</h3>
        <Image src="/img/icons/cost.svg" alt="" width={150} height={150} />
        <p>{t("about.whyBolt.description1")}</p>
      </div>

      <div className={myStyles.ticket}>
        <h3>{t("about.whyBolt.title2")}</h3>
        <Image src="/img/icons/chain.svg" alt="" width={150} height={150} />
        <p>{t("about.whyBolt.description2")}</p>
      </div>

      <div className={myStyles.ticket}>
        <h3>{t("about.whyBolt.title3")}</h3>
        <Image src="/img/icons/cloud.svg" alt="" width={150} height={150} />
        <p>{t("about.whyBolt.description3")}</p>
      </div>
    </div>
  );
}
export default WhyBolt;
