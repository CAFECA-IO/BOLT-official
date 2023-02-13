import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import myStyles from "@/styles/Home.module.css";

function BoltIntro() {
  const { t } = useTranslation("common");

  return (
    <div className={myStyles.bolt_intro_container}>
      <div>
        <div>
          <Image src="/img/main_1.png" alt="" width={300} height={200} />
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={true}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        <div>
          <h2>{t("main.block2.title1")}</h2>
          <p>{t("main.block2.description1")}</p>
        </div>
      </div>
    </div>
  );
}
export default BoltIntro;
