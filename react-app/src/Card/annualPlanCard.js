import React from "react";
import iconimage from '../Images/icon-music.svg';
import styles from "./card.module.css";

function AnnualPlanCard() {

    return (

        <div className={styles.annualPlanCardStyle}>
            <img src={iconimage} className={styles.annualPlanCardImage} alt="music"/>

            <div style={{
                margin: "10px"
            }}>
                <h4 style={{
                    fontWeight: "bold",
                    margin: "5px 0"
                }}>Annual Plan</h4>
                <p style={{
                    color: "gray",
                    margin: "0"
                }}>$59.99/year</p>
            </div>

            <a className={styles.annualPlanChangeLink}>Change</a>
        </div>


    )
}

export default AnnualPlanCard;