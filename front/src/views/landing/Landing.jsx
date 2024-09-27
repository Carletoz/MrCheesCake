import { useEffect, useState } from "react";
import MainCard from "../../components/card/MainCard";

const Landing = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("https://66ef194e3ed5bb4d0bf2cd18.mockapi.io/desserts")
      .then((response) => response.json())
      .then((data) => {
        const uniqueDesserts = Object.values(
          data.reduce((acc, dessert) => {
            if (!acc[dessert.category]) {
              acc[dessert.category] = dessert;
            }
            return acc;
          }, {})
        );
        setDesserts(uniqueDesserts);
      });
  }, []);

  return (
    <div>
      {desserts.map((dessert) => {
        return <MainCard key={dessert.id} dessert={dessert}/>;
      })}
    </div>
  );
};

export default Landing;
