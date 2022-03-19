import styles from "../styles/Landing.module.css";
import AgentsImage from "../assets/img/full.png";

const Error = () => {
  return (
    <div className={styles.landingBody}>
      <h1>HATA!</h1>
      <p>Talep ettiğiniz sayfaya ulaşamadık!</p>
      <img src={AgentsImage} alt="" />
    </div>
  );
};

export default Error;
