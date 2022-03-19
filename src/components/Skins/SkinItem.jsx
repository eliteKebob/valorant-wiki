import styles from "../../styles/Skin.module.css";

const SkinItem = ({ skin }) => {
  return (
    <div className={styles.skinCard}>
      <div className={styles.skinHeading}>
        <h3>{skin.displayName}</h3>
      </div>
      <img src={skin.fullRender} alt="skinImg" className={styles.skinImage} />
    </div>
  );
};

export default SkinItem;
