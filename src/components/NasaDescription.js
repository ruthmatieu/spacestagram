import React from "react";
import styled from 'styled-components';

const NasaDescription = (props) => {
    return (
        <div>
            <p>{props.data.explanation}</p>
            <p>{props.data.date}</p>
        </div>
    )
}

export default NasaDescription;