import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import myStyles from "@/styles/about.module.css";

interface IUsecaseParams {
  title: string;
  description: string[];
  image: string;
}

function UseCaseItems({ title, description, image }: IUsecaseParams) {
  const { t } = useTranslation("common");

  const useDescrip = description;
  const useImg = t(image);

  const useDescripList = useDescrip.map((v) => {
    return <p key={v}>{t(v)}</p>;
  }); //todo: react use id

  return (
    <div className={myStyles.useitem_container}>
      <div className={myStyles.useitem_textbox}>
        <h3>{t(title)}</h3>
        {useDescripList}
      </div>
      <div className={myStyles.useitem_imgbox}>
        <Image src={useImg} alt={title} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default UseCaseItems;
