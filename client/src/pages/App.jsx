import "./App.css";
import Nav from "../components/nav/nav";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import SaleCard from "../components/cards/saleCard/saleCard";
import GameCard from "../components/cards/gameCard/gameCard";

import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cart";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  console.log(cart);

  return (
    <div>
      <Nav></Nav>

      <Container>
        <Subtitle>Promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard
            title={"League of Legends"}
            fullPrice={199.99}
            discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "League of Legends",
                price: 199.99 - 199.99 * 0.3,
                img: "League of Legends",
              })
            }
          />
          <SaleCard
            title={"Dota 2"}
            fullPrice={199.99}
            discount={40}
            onAdd={() =>
            handleAddProduct({
              name: "Dota 2",
              price: 199.99 - 199.99 * 0.4,
              img: "Dota 2",
            })}
          />
          <SaleCard
            title={"Valorant"}
            fullPrice={199.99}
            discount={50}
            onAdd={() =>
              handleAddProduct({
                name: "Valorant",
                price: 199.99 - 199.99 * 0.5,
                img: "Valorant",
            })}
          />
        </div>

        <div className="gameSession">
          <Subtitle> Outros Jogos </Subtitle>
          <div className="gameContainer">
            <GameCard
              title={"CSGO"}
              info={"Ação, Estratégia, Multijogador"}
              price={99.9}
            >
              Counter Strike: Global Offensive
            </GameCard>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
