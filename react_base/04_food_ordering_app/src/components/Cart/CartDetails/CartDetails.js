import CartContext from "../../../store/cart-context";
import classes from "./CartDetails.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext, useState} from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {

    const ctx = useContext(CartContext);

    // 设置state控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false);

    // 添加函数显示确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    return (
        <Backdrop>

            {showConfirm && <Confirm confirmText={'确认清空购物车吗？'}/>}

            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrash}/>
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        ctx.items.map(item =>
                            <Meal noDesc key={item.id} meal={item}/>
                        )
                    }
                </div>
            </div>
        </Backdrop>
    )
}

export default CartDetails;