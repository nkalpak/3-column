import React from 'react';

function ProceedToPayment() {

    //state so hover
    function handleHover(event) {
        event.target.style.opacity = "0.7"
        event.target.style.cursor = "pointer"
    }

    function handleMouseLeave(event) {
        event.target.style.opacity = "1"
    }

    return (
        <button onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
                style={{
                    color: "white",
                    backgroundColor: "rgb(56, 42, 255)",
                    fontWeight: "bold",
                    padding: "10px 90px",
                    borderRadius: "10px",
                    border: "1px solid rgb(56, 42, 255)"
                }}>
            Proceed to Payment
        </button>
    )
}

export default ProceedToPayment;