import React from 'react';
import Typography from "../Typography/typography";
import AnnualPlanCard from "./annualPlanCard";
import ProceedToPayment from "../Buttons/proceedToPayment";
import CancelOrder from "../Buttons/cancelOrder";
import styles from "./card.module.css";

function MainCard() {
    return (
        <div className={styles.mainCardStyle}>
            <div className={styles.card}>
                <Typography/>

                <AnnualPlanCard/>
                <ProceedToPayment/>

                <CancelOrder/>
            </div>

        </div>
    )
}

export default MainCard;