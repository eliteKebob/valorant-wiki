import { useContext } from "react";
import AppLevelContext from "../../context/AppLevelContext";
import WeaponItem from "./WeaponItem";
import styles from "../../styles/WeaponList.module.css";

const WeaponList = () => {
  const { weapons } = useContext(AppLevelContext);

  return (
    <div className={styles.weaponList}>
      {weapons.map((weapon, idx) => (
        <WeaponItem weapon={weapon} key={idx} />
      ))}
    </div>
  );
};

export default WeaponList;
