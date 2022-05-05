import React from "react";

function CancelOrder() {

    //state so hover
    function handleHover(event) {
        event.target.style.color = "black"
        event.target.style.cursor = "pointer"
    }

    function handleMouseLeave(event) {
        event.target.style.color = "darkgray"
    }


    return (
        <button onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
                style={{
                    color: "darkgray",
                    backgroundColor: "white",
                    fontWeight: "bold",
                    padding: "10px 90px",
                    borderRadius: "10px",
                    border: "1px solid white",
                    margin: "10px 0px"
                }}>
            Cancel Order
        </button>
    )
}

export default CancelOrder;