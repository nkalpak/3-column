import React from "react";
import styles from "./buttons.module.css";

function CancelOrder() {

    return (
        <button className={styles.cancelOrderButtonStyle}>
            Cancel Order
        </button>
    )
}

export default CancelOrder;