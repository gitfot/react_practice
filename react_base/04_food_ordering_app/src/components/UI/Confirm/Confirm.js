import classes from "./Confirm.module.css"

const Confirm = (props) => {
    return (
        <div>
            <p className={classes.ConfirmText}>{props.confirmText}</p>
            <div className={classes.Cancel}>取消</div>
            <div className={classes.Confirm}>确认</div>
        </div>
    )
}

export default Confirm;