import React from "react";
import AnnualPlanCard from "./annualPlanCard";
import ProceedToPayment from "../Buttons/proceedToPayment";
import CancelOrder from "../Buttons/cancelOrder";
import styles from "./card.module.css";
import image from "../Images/illustration-hero.svg";
import TypographyContent from "../Typography/typographyContent";

function MainCard() {
  return (
    <div className={styles.mainCardStyle}>
      <img
        className={styles.imageStyle}
        src={image}
        alt="girl dancing to music"
      />

      <div className={styles.cardStyle}>
        <TypographyContent />

        <AnnualPlanCard />

        <ProceedToPayment />
        <CancelOrder />
      </div>
    </div>
  );
}

export default MainCard;
