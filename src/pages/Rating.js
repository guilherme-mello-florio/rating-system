import { Link } from "react-router-dom";
import { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import UserContext from "./UserContext";

const Rating = () => {
  const rating = useContext(UserContext);
  return (
    <section className="card">
      <div className="spacer"></div>
      <div className="star">
        <img className="starImg" src="./images/star.png" alt="Estrela" />
      </div>
      <h1>Avalie o nosso serviço.</h1>
      <p>
        Por favor conte um pouco como foi sua experiência ao usar nosso serviço.
        Todo retorno é importante para nós melhorarmos!
      </p>
      <div className="ratingButtons">
        <div
          id="rating_1"
          className={
            rating.nota == 1
              ? "ratingButton ratingButtonSelected"
              : "ratingButton"
          }
          onClick={() => rating.setNota("1")}
        >
          1
        </div>
        <div
          id="rating_2"
          className={
            rating.nota == 2
              ? "ratingButton ratingButtonSelected"
              : "ratingButton"
          }
          onClick={() => rating.setNota("2")}
        >
          2
        </div>
        <div
          id="rating_3"
          className={
            rating.nota == 3
              ? "ratingButton ratingButtonSelected"
              : "ratingButton"
          }
          onClick={() => rating.setNota("3")}
        >
          3
        </div>
        <div
          id="rating_4"
          className={
            rating.nota == 4
              ? "ratingButton ratingButtonSelected"
              : "ratingButton"
          }
          onClick={() => rating.setNota("4")}
        >
          4
        </div>
        <div
          id="rating_5"
          className={
            rating.nota == 5
              ? "ratingButton ratingButtonSelected"
              : "ratingButton"
          }
          onClick={() => rating.setNota("5")}
        >
          5
        </div>
      </div>
      <Link
        to="/Thanks"
        id="confirmButton"
        className={rating.nota == 0 ? "confirmButtonDisabled" : "confirmButton"}
      >
        AVALIAR
      </Link>
      <div className="spacer"></div>
    </section>
  );
};

export default Rating;
