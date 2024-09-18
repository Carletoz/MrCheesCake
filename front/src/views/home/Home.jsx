import Card from "../../components/card/Card";  
import banner2 from "../../assets/postreZanahoria2.png";
import styles from "../../components/navbar/navbar.module.css";

const Home = () => {
  return (
    <div>
      <img className={styles.banner} src={banner2} alt="logo" />
      <div
        className="cardContainer"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
