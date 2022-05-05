import React from "react";

function TypographyContent(props) { //variant


    const heading = props.heading;
    const body = props.body;

    //da koristam props
    return (
        <>
            <h2 style={{
                color: "hsl(223, 47%, 23%)",
                margin: "5px 0"
            }}>Order Summary</h2>
            <p style={{
                fontSize: "16px",
                color: "hsl(224, 23%, 55%)",
                margin: "5px 0"
            }}>You can now listen to millions of songs, audiobooks,
                and podcasts on any device anywhere you like!</p>
        </>
    )
}

export default TypographyContent;