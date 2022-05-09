import React from "react";
import styles from "./typography.module.css";

function TypographyContent() {
  function Typography(props) {
    if (props.variant === "heading") {
      props.className = styles.headerStyle;
      //props.className="headerStyle";
      return <h1>{props.children}</h1>;
    }

    if (props.variant === "body") {
      props.className = styles.bodyStyle;
      //props.className="bodyStyle";
      return <p>{props.children}</p>;
    }
  }

  return (
    <div>
      <Typography>Order summary</Typography>
      <Typography>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </Typography>
    </div>
  );
}

export default TypographyContent;
