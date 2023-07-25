import classes from "./Cart.module.css"
import iconImg from '../../asset/bag.png'
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";

const Cart = () => {

    const ctx = useContext(CartContext);

    const [showDetails, setDetails] = useState(false);

    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) return;
        setDetails(prevState => !prevState);
    }

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {/*引入购物车的详情*/}
            {showDetails && <CartDetails/>}
            <div className={classes.Icon}>
                <img src={iconImg}/>
                <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            </div>
            {ctx.totalAmount === 0 ?
                <p className={classes.NoMeal}>未选购商品</p>
                : <p className={classes.Price}>总金额：{ctx.totalPrice}</p>}
            <button className={`${classes.Button}`}>去结算</button>
        </div>
    )
}

export default Cart;