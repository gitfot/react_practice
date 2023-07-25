import {createPortal} from "react-dom";
import classes from "./Backdrop.module.css";

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return createPortal (
        <div className={`${classes.Backdrop} ${props.className}`}>
            {props.children}
        </div>, backdropRoot
    )
}