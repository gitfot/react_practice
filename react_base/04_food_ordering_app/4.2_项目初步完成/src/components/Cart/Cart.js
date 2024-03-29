import classes from "./Cart.module.css"
import iconImg from '../../asset/bag.png'
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {

    const ctx = useContext(CartContext);

    const [showDetails, setShowDetails] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    // 添加一个显示详情页的函数
    const toggleDetailsHandler = () => {
        if(ctx.totalAmount === 0) {
            setShowDetails(false);
            return;
        }
        setShowDetails(prevState => !prevState);
    };

    const showCheckoutHandler = () => {
        if(ctx.totalAmount === 0) return;
        setShowCheckout(true);
    };

    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    };

    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {/*引入购物车的详情*/}
            {showDetails && <CartDetails/>}
            {showCheckout && <Checkout onHide = {hideCheckoutHandler}/>}
            <div className={classes.Icon}>
                <img src={iconImg}/>
                <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
            </div>
            {ctx.totalAmount === 0 ?
                <p className={classes.NoMeal}>未选购商品</p>
                : <p className={classes.Price}>总金额：{ctx.totalPrice}</p>}
            <button className={`${classes.Button}`} onClick={showCheckoutHandler}>去结算</button>
        </div>
    )
}

export default Cart;