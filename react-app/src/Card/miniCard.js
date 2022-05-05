import React from "react";
import iconimage from '../Images/icon-music.svg';

function MiniCard() {

    function handleMouseOver(event) {
        event.target.style.opacity = "0.7"
        event.target.style.textDecoration = "none"
    }

    function handleMouseLeave(event) {
        event.target.style.opacity = "1"
        event.target.style.textDecoration = "underline"
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "hsl(225, 100%, 98%)",
            borderRadius: "10px",
            margin: "20px 0",
            width: "270px",
            padding: "0 20px"
        }}>
            <img src={iconimage} style={{
                width: "50px",
                height: "50px",
                border: "1px solid transparent",
                borderRadius: "25px"
            }} alt="music"/>

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

            <a onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="#" style={{
                color: "rgb(56, 42, 255)",
                fontWeight: "bold"
            }}>Change</a>
        </div>
    )
}

export default MiniCard;