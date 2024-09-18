import logo from "../../assets/logo.png";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/postreZanahoria2.png";
import carroIcon from "../../assets/carroIcon.png";
import carroIcon2 from "../../assets/carroIcon2.png";
import logo1 from "../../assets/logo1.png";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.carroIcon} src={carroIcon2} alt="carro" />
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
