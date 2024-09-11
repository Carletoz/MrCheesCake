import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
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
