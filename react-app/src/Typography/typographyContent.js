import React from "react";
import styles from "./typography.module.css";

function TypographyContent() {
  function Typography(props) {
    if (props.variant === "heading") {
      return <h1 className={styles.headerStyle}>{props.children}</h1>;
    }

    if (props.variant === "body") {
      return <p className={styles.bodyStyle}>{props.children}</p>;
    }
  }

  return (
    <div>
      <Typography variant="heading">Order summary</Typography>
      <Typography variant="body">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </Typography>
    </div>
  );
}

export default TypographyContent;
