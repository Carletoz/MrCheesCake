import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo" />
      <div className={styles.section}>
        <strong>Nosotros</strong>
        <ul>
          <li>Acerca de Sr CheeseCake</li>
          <li>Preguntas frecuentes</li>
          <li>Blog</li>
          <li>Trabaja con nosotros</li>
        </ul>
      </div>
      <div className={styles.section}>
        <strong>Atención al cliente</strong>
        <ul>
          <li>📞 Contáctenos</li>
          <li>📧 servicioalcliente@srCheesecake.com.co</li>
          <li className={styles.whatsapp}>📱 Línea de WhatsApp: 322 2336338</li>
        </ul>
        <div className={styles.socialMedia}>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
