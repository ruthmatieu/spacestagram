import React from "react";
import styled from 'styled-components';

const NasaImage = (props) => {
    //console.log('DATA', props.data)
    return (

        <div>
            <h2>{props.data.title}</h2>
            <img src={props.data.hdurl} alt={props.data.copyright} style={{width: '40%'}}/>
        </div>
    )
}

export default NasaImage;