import { useState } from "react";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      {isOpen && (
        <div className={styles.menu}>
          <a href="/">Inicio</a>
          <a href="/products">Productos</a>
          <a href="/contact">Contacto</a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;