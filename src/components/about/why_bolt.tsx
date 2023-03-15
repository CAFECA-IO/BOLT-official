import Image from "next/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";

function WhyBolt() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.ticket_holder}>
      <div className={myStyles.ticket}>
        <h3>{t("ABOUT.WHY_BOLT.TITLE1")}</h3>
        <Image src="/img/icons/cost.svg" alt="" width={150} height={150} />
        <p>{t("ABOUT.WHY_BOLT.DESCRIPTION1")}</p>
      </div>

      <div className={myStyles.ticket}>
        <h3>{t("ABOUT.WHY_BOLT.TITLE2")}</h3>
        <Image src="/img/icons/chain.svg" alt="" width={150} height={150} />
        <p>{t("ABOUT.WHY_BOLT.DESCRIPTION2")}</p>
      </div>

      <div className={myStyles.ticket}>
        <h3>{t("ABOUT.WHY_BOLT.TITLE3")}</h3>
        <Image src="/img/icons/cloud.svg" alt="" width={150} height={150} />
        <p>{t("ABOUT.WHY_BOLT.DESCRIPTION3")}</p>
      </div>
    </div>
  );
}
export default WhyBolt;
