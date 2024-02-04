import { useState, useContext } from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";
import "./styles.css";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

export default function Home() {
  const [comNota, setcomNota] = useState(false);
  const [avaliacao, setAvaliacao] = useState(0);
  const rating = useContext(UserContext);

  if (rating.nota === 0) {
    return (
      <section className="card">
        <div className="spacer"></div>
        <h3 id="message">
          Você ainda não avaliou nossos serviços, clique no botão a seguir para
          fazer sua avaliação.
        </h3>
        <div className="ratingDisplay">
          Nota: -<div id="rating"></div>
        </div>
        <Link to="/Rating" className="confirmButton">
          Avaliar
        </Link>
        <button className="backButton" onClick={() => rating.setNota(0)}>
          Remover avaliação
        </button>
        <div className="spacer"></div>
      </section>
    );
  } else {
    return (
      <section className="card">
        <div className="spacer"></div>
        <h3 id="message">
          Obrigado por avaliar nosso serviço, se desejar pode alterar sua
          avaliação.
        </h3>
        <div className="ratingDisplay">
          Nota: {rating.nota}
          <div id="rating"></div>
        </div>
        <Link to="/Rating" className="confirmButton">
          Avaliar
        </Link>
        <button className="backButton" onClick={() => rating.setNota(0)}>
          Remover avaliação
        </button>
        <div className="spacer"></div>
      </section>
    );
  }
}
