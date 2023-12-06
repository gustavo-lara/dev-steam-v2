import styles from "./nav.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import CartButton from "../cartButton/cartButton";

const Nav = () => {
  return (
    <div className={styles.bar}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo da DevSteam" width={"72"}/>
            <h1>DevSteam</h1>
        </div>
        <input type="text" placeholder="Buscar"/>
        <CartButton> </CartButton>
    </div>
  )
}

export default Nav