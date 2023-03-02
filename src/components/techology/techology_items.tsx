import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/technology.module.css";

interface ITechnologyItemsParams {
  anchor: string;
  title: string;
  description: string;
  image: string;
}

function TechnologyItems({
  anchor,
  title,
  description,
  image,
}: ITechnologyItemsParams) {
  const { t } = useTranslation("common");

  return (
    <div id={anchor} className={myStyles.tech_item_container}>
      <div className={myStyles.tech_item_imgbox}>
        <Image src={image} layout="fill" objectFit="contain" />
      </div>
      <div className={myStyles.tech_item_textbox}>
        <h4>{t(title)}</h4>
        <p>{t(description)}</p>
      </div>
    </div>
  );
}

export default TechnologyItems;
