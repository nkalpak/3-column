import React from "react";


function TypographyContent(props) { //variant

    function Typography(props) {
        if (props.variant === 'heading') {
            props.className = "headerStyle";
            return <h1>{props.children}</h1>
        }


        if (props.variant === 'body') {
            props.className = "bodyStyle";
            return <p>{props.children}</p>
        }
    }
    //
    // <TypographyContent variant='heading'>Order Summary</TypographyContent>
    // <TypographyContent variant='body'>You can now listen to millions of songs, audiobooks, and podcasts on any device
    //     anywhere you like!</TypographyContent>
    //

    // return (
    //      <>
    //          <h2 style={{
    //              color: "hsl(223, 47%, 23%)",
    //              margin: "5px 0"
    //          }}>Order Summary</h2>
    //          <p style={{
    //              fontSize: "16px",
    //              color: "hsl(224, 23%, 55%)",
    //              margin: "5px 0"
    //          }}>You can now listen to millions of songs, audiobooks,
    //              and podcasts on any device anywhere you like!</p>
    //      </>
    // )



}

export default TypographyContent;