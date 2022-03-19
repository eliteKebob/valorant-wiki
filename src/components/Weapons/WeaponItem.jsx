import styles from "../../styles/Weapon.module.css";

const WeaponItem = ({ weapon }) => {
  return (
    <div className={styles.weaponCard}>
      <div className={styles.weaponHeading}>
        <h3>{weapon.displayName}</h3>
      </div>
      <img
        src={weapon.displayIcon}
        alt="weaponImg"
        className={styles.weaponImage}
      />
    </div>
  );
};

export default WeaponItem;
