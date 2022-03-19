import styles from "../../styles/Map.module.css";

const MapItem = ({ map }) => {
  return (
    <div className={styles.mapCard}>
      <div className={styles.mapHeading}>
        <h3>{map.displayName}</h3>
        <p>{map.coordinates}</p>
      </div>
      <img src={map.splash} alt="mapImage" className={styles.mapImg} />
    </div>
  );
};

export default MapItem;
