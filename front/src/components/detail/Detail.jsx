import { useEffect, useState } from "react";

import styles from "./Detail.module.css";

const Detail = ({ id, handleOnClose }) => {
  const [dessert, setDessert] = useState(null);

  useEffect(() => {
    fetch(`https://66ef194e3ed5bb4d0bf2cd18.mockapi.io/desserts/${id}`)
      .then((response) => response.json())
      .then((data) => setDessert(data))
      .catch((error) => console.error("Error fetching dessert:", error));
  }, [id]);

  return (
    <>
      <div className={styles.overlay} onClick={handleOnClose}></div>
      <div className={styles.detail}>
        {dessert ? (
          <>
            <img className={styles.detailImg} src={dessert.image} alt={dessert.name} />
            <div className={styles.detailContent}>
              <h1>{dessert.name}</h1>
              <p>{dessert.description}</p>
              <button className={styles.detailButton} onClick={handleOnClose}>Cerrar</button>
              <button className={styles.detailButton}>Agregar al carrito</button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Detail;