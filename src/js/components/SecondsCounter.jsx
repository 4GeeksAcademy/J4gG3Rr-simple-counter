import React from "react";

const SecondsCounter = (props) => {

    let digits = props.seconds.toString().padStart(6, '0').split("");

    return (
        <div className="text-center mt-5 bg-secondary">
            <button className="btn btn-dark fs-1">
                <i className="fa-regular fa-clock"></i>
            </button>
            {digits.map((digit, index) => {
                return (
                    <button className="btn btn-dark fs-1 p-5 ms-4" key= {index}>
                         {digit}
                    </button>
                )
            })}
        </div>
    )
}

export default SecondsCounter