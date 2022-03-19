import { useContext } from "react";
import AppLevelContext from "../../context/AppLevelContext";
import SkinItem from "./SkinItem";
import styles from "../../styles/SkinList.module.css";

const SkinList = () => {
  const { skins } = useContext(AppLevelContext);

  return (
    <div className={styles.skinList}>
      {skins.map((skin, idx) => (
        <SkinItem skin={skin} key={idx} />
      ))}
    </div>
  );
};

export default SkinList;
