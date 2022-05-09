import React from "react";
import iconimage from '../Images/icon-music.svg';
import styles from "./card.module.css";

function AnnualPlanCard() {

    return (

        <div className={styles.annualPlanCardStyle}>
            <img src={iconimage} className={styles.annualPlanCardImage} alt="music"/>

            <div className={styles.annualPlanHeaderAndPrice}>
                <h4 className={styles.annualPlanHeader}>Annual Plan</h4>
                <p className={styles.yearPrice}>$59.99/year</p>
            </div>

            <a className={styles.annualPlanChangeLink}>Change</a>
        </div>


    )
}

export default AnnualPlanCard;