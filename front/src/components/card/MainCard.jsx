import horneados from '../../assets/horneados.jpeg';

import styles from "./MainCard.module.css";

const MainCard = ({dessert: {category, image}}) => {

    
  return (
    <div className={styles.mainCard}>
      <img
        src={image}
        alt="image"
      />
      <button className={styles.overlayButton}>{category}</button>
    </div>
  );
};

export default MainCard;
