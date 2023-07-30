import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "./Checkout.module.css"
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {createPortal} from "react-dom";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
    const ctx = useContext(CartContext);
    return createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()}></FontAwesomeIcon>
            </div>

            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2>餐品详情</h2>
                </header>

                <div className={classes.Meals}>
                    {ctx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>支付金额：￥{ctx.totalPrice}</p>
                </footer>
            </div>
        </div>,
        checkoutRoot
    )
}

export default Checkout;