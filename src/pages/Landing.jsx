import styles from "../styles/Landing.module.css";
import AgentsImage from "../assets/img/full.png";

const Landing = () => {
  return (
    <div className={styles.landingBody}>
      <h1>Valopedia</h1>
      <p>
        Valopedia'ya hoşgeldiniz! Navigasyon menüsünden merak ettiklerinize
        ulaşabilirsiniz!
      </p>
      <img src={AgentsImage} alt="" />
    </div>
  );
};

export default Landing;
