import React, { useEffect, useState } from "react";
import Card from "antd/es/card";
import styles from "./index.module.scss";

function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const allFilms = async () => {
      const response = await fetch("https://ghibliapi.herokuapp.com/films", {
        method: "GET"
      });
      const json = await response.json();
      setFilms(json);
    };
    allFilms();
  }, []);

  return (
    <div className={styles.cardsContainer}>
      {films.map((filmItem: any) => (
        <div className={styles.cardContainer}>
          <Card
            className={styles.card}
            headStyle={{
              position: "sticky",
              top: "0",
              background:
                "linear-gradient(100deg, rgba(255,28,130,1) 0%, rgba(189,122,250,1) 35%, rgba(83,101,236,1) 60%, rgba(53,203,233,1) 100%)",
              color: "white",
              textAlign: "center"
            }}
            title={filmItem.title}
            style={{ borderRadius: "10px" }}
          >
            <p className={styles.cardContent}>{filmItem.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
