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
  const useImg = t(`${props.image}`);

  const useDescripList = useDescrip.map((v) => {
    return <p key={v}>{t(v)}</p>;
  });

  return (
    <div className={myStyles.useitem_container}>
      <div className={myStyles.useitem_textbox}>
        <h3>{t(`${props.title}`)}</h3>
        {useDescripList}
      </div>
      <div className={myStyles.useitem_imgbox}>
        <Image src={`${useImg}`} alt="use_case01" width={500} height={500} />
      </div>
    </div>
  );
}

export default UseCaseItems;
