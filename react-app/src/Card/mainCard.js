import React from 'react';
import Typography from "../Typography/typography";
import MiniCard from "./miniCard";
import ProceedToPayment from "../Buttons/proceedToPayment";
import CancelOrder from "../Buttons/cancelOrder";
import dancing from "../Images/illustration-hero.svg";

function MainCard() {
    return (
        <div style={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            margin: "20px",
            border: "1px solid transparent",
            borderRadius: "15px",
            padding: "0 20px 20px 20px",
            backgroundColor: "white",
            boxShadow: "1px 1px 5px darkgray"
        }}>

            <img src={dancing} alt="dancing"
            style={{
                width: "390px",
                border: "1px solid transparent",
                borderRadius: "20px 20px 0 0",
                marginBottom: "30px"
            }}/>

            <Typography/>

            <MiniCard/>

            <ProceedToPayment/>

            <CancelOrder/>
        </div>
    )
}

export default MainCard;