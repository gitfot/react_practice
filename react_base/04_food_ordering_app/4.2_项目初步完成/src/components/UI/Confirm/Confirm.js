import classes from "./Confirm.module.css"
import Backdrop from "../Backdrop/Backdrop";

const Confirm = (props) => {
    return (
        <Backdrop>
            <div className={classes.ConfirmParent}>
                <p className={classes.ConfirmText}>{props.confirmText}</p>
                <div>
                    <button
                        onClick={(e) => props.onCancel(e)}
                        className={classes.Cancel}>取消</button>
                    <button
                        onClick={(e) => props.onConfirm(e)}
                        className={classes.Confirm}>确认</button>
                </div>
            </div>
        </Backdrop>

    )
}

export default Confirm;