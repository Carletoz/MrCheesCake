import styles from "./card.module.css";

const Card = ({ dessert, handleOnClickDetails }) => {
  const { name, category, price, image, id } = dessert;
  return (
    <div className={styles.card} onClick={() => handleOnClickDetails(id)}>
      <img className={styles.cardImg} src={image} alt={name} />
      <div className={styles.cardInfo}>
        <p className={styles.cardName}>{name}</p>
        <span className={styles.cardPrice}>{price}</span>
        {/*
         <button
         
         className={styles.cardButton}
         onClick={() => handleOnClickDetails(id)}
         >
          Ver Producto
        </button>
       */}
      </div>
    </div>
  );
};

export default Card;
