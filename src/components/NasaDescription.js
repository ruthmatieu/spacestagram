import React from "react";

const NasaDescription = (props) => {
    return (
        <div>
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default NasaDescription;