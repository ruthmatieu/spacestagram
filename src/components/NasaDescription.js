import React from "react";
import styled from 'styled-components';

const NasaDescription = (props) => {
    return (
        <Container>
            <p className="desc">{props.data.explanation}</p>
            <p className="date">{props.data.date}</p>
        </Container>
    )
}

export default NasaDescription;

const Container = styled.div`
    .desc {
        font-size: 1.5rem;
        text-align: left;
        width: 80%;
        margin: 0 auto;
        padding: 4rem 0 2rem 0;
    }

    .date {
        font-size: 1.7rem;
        font-weight: 700;
    }
`