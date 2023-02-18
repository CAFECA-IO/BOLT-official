import Image from "next/image";

import { useTranslation } from "next-i18next";
import myStyles from "@/styles/technology.module.css";

function TechnologyItems(props: {
  anchor: string;
  title: string;
  description: string;
  image: string;
}) {
  const { t } = useTranslation("common");

  return (
    <div id={props.anchor} className={myStyles.tech_item_container}>
      <div className={myStyles.tech_item_imgbox}>
        <Image
          src={props.image}
          alt={t(`${props.title}`)}
          width={500}
          height={500}
        />
      </div>
      <div className={myStyles.tech_item_textbox}>
        <h4>{t(`${props.title}`)}</h4>
        <p>{t(`${props.description}`)}</p>
      </div>
    </div>
  );
}

export default TechnologyItems;
