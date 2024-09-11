import postre from "../../assets/postreOreo.png";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={postre} alt="postre" />
      <h3>Cheesecake Oreo</h3>
      <span>descripcion</span>
      <span>$15.000</span>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Card;
