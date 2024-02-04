import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useContext } from "react";

const Thanks = () => {
  const rating = useContext(UserContext);
  return (
    <section className="card">
      <div className="spacer"></div>
      <img src="./images/feedback.png" alt="feedback" />
      <h1>Obrigado!</h1>
      <div className="ratingDisplay">
        Você deu a nota&nbsp; <div id="rating">{rating.nota}</div>&nbsp;de 5
      </div>
      <p>
        Estamos felizes e agradecidos por usar parte do seu tempo para dar sua
        opinião. Se precisar de ajuda futuramente pode nos procurar!
      </p>

      <Link
        to="/"
        id="backButton"
        className="backButton"
        onclick="confirmRating()"
      >
        Confirmar Avaliação
      </Link>
      <div className="spacer"></div>
    </section>
  );
};

export default Thanks;
