import myStyles from "@/styles/about.module.css";
import UseCaseItems from "./usecase_items";
import { getUseCaseData } from "@/constants/config";

function UseCaseList() {
  const useData = getUseCaseData();

  const useList = useData.map((v) => {
    return (
      <UseCaseItems
        key={v.id}
        title={v.title}
        description={v.description}
        image={v.image}
      />
    );
  });

  return <div className={myStyles.uselist_container}>{useList}</div>;
}
export default UseCaseList;
