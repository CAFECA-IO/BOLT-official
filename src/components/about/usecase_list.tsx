import myStyles from "@/styles/about.module.css";
import UseCaseItems from "./usecase_items";
import { getUseCaseData } from "../../../contents";

function UseCaseList() {
  const useData = getUseCaseData();

  const useList = useData.map((v) => {
    return (
      <UseCaseItems
        key={v.title}
        title={v.title}
        description={v.description}
        image={v.image}
      />
    );
  });

  return <div className={myStyles.uselist_container}>{useList}</div>;
}
export default UseCaseList;
