import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <span>Pide a domicilio</span>
        <span>Ubicacion</span>
        <span>Trabaja con nosotros</span>
      </div>
    </div>
  );
};

export default Navbar;
