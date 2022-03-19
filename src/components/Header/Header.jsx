import styles from "../../styles/Header.module.css";
import Logo from "../../assets/img/logo.svg";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <header>
      <div className={styles.brand}>
        <Link to="/">
          <img src={Logo} alt="logo" />
          <h1>VALORANT WIKI</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              to="/weapons"
              className={
                pathMatchRoute("/weapons")
                  ? styles.navLinkActive
                  : styles.navLink
              }
            >
              Silahlar
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/maps"
              className={
                pathMatchRoute("/maps") ? styles.navLinkActive : styles.navLink
              }
            >
              Haritalar
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/agents"
              className={
                pathMatchRoute("/agents")
                  ? styles.navLinkActive
                  : styles.navLink
              }
            >
              Ajanlar
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/skins"
              className={
                pathMatchRoute("/skins") ? styles.navLinkActive : styles.navLink
              }
            >
              Desenler
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
