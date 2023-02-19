import Image from "next/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";

function UseCaseItems(props: {
  title: string;
  description: string[];
  image: string;
}) {
  const { t } = useTranslation("common");

  const useDescrip = props.description;
  const useImg = t(`${props.image}`); //image .svg

  const useDescripList = useDescrip.map((v) => {
    return <p key={v}>{t(v)}</p>;
  }); //todo: react use id

  return (
    <div className={myStyles.useitem_container}>
      <div className={myStyles.useitem_textbox}>
        <h3>{t(`${props.title}`)}</h3>
        {useDescripList}
      </div>
      <div className={myStyles.useitem_imgbox}>
        <Image src={`${useImg}`} alt="use_case01" width={400} height={400} />
      </div>
    </div>
  );
}

export default UseCaseItems;
