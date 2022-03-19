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
              Weapons
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to="/maps"
              className={
                pathMatchRoute("/maps") ? styles.navLinkActive : styles.navLink
              }
            >
              Maps
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
              Agents
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
