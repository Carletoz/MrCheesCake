import Card from "../../components/card/Card";  
import banner2 from "../../assets/postreZanahoria2.png";
import styles from "../../components/navbar/navbar.module.css";
import { useEffect, useState } from "react";
import Detail from "../../components/detail/Detail";
import cardStyles from "../../components/card/Card.module.css";

const Products = () => {

  const [desserts, setDesserts]= useState([])
  const [detail, setDetail] = useState(false)
  const [id, setId] = useState(0)

const handleOnClickDetails = (id) =>{
setDetail(true)
setId(id)
}

const handleOnClose = () =>{
  setDetail(false)
}

  useEffect(()=>{
    fetch("https://66ef194e3ed5bb4d0bf2cd18.mockapi.io/desserts")
    .then((response)=> response.json())
    .then((data)=> setDesserts(data))
  },[])

  return (
    <div>
      <img className={styles.banner} src={banner2} alt="logo" />
      <div className={styles.envioPromo}>Envio express en 45 minutos por Rappi aqui</div>
      <div className={cardStyles.cardContainer}>
        {
          desserts.map((dessert)=>{
            return <Card key= {dessert.id} dessert={dessert} handleOnClickDetails={handleOnClickDetails}/>
          })
        }
        {detail && <Detail id={id} handleOnClose={handleOnClose}/>}
      </div>
    </div>
  );
};

export default Products;
