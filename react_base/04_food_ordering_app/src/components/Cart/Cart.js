import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = () => {

    const ctx = useContext(CartContext);

    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <img src={iconImg}/>
                <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            </div>
            <p className={classes.Price}> 总金额：{ctx.totalPrice}</p>
            <button className={`${classes.Button}`}>去结算</button>
        </div>
    )
}

export default Cart;