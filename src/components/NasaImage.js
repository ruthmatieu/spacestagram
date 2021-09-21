import React from "react";
import styled from 'styled-components';

const NasaImage = (props) => {
    //console.log('DATA', props.data)
    return (

        <Container>
            <h2>{props.data.title}</h2>
            <img src={props.data.hdurl} alt={props.data.copyright}/>
        </Container>
    )
}

export default NasaImage;

const Container = styled.div`
    h2 {
        font-size: 4rem;
    }

    img {
        width: 50%;
    }
`