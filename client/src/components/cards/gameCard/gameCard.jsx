import styles from "./gameCard.module.css";
import Button from "../../forms/button/button";

const GameCard = ({ children, title, info, price }) => {
  return (
    <div className={styles.gameCard}>
      <img
        src={`/public/${title}.png`}
        alt={title}
        width={300}
        height={145}
      />
      <div className={styles.info}>
        <h3>{children}</h3>
        <p>{info}</p>
        <div className={styles.pricing}>
          <h2>R${price}</h2>
          {title != "gameOver" && <Button>Adicionar ao Carrinho</Button>}

        </div>
      </div>
    </div>
  );
};

GameCard.defaultProps = {
  children: "Jogo não encontrado",
  title: "gameOver",
  info: "Ação, Estratégia, Multijogador",
  price: "00.00"
}

export default GameCard;