import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

import Image from "./NasaImage";
import Description from "./NasaDescription";
import Reaction from "./NasaReaction";


const NasaContainer = () => {
    const key = 'fETbCakhpVh7nThjldhSJ3FqPIGXBsdmlGkLLcwx'
    const [nasaInfo, setNasaInfo] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        .then(res => {
            console.log(res.data)
            setNasaInfo(res.data)
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }, [])

    const loadingCheck = () => {
        if(loading){
            return <h1>Loading Spacestagram...</h1>
        } else {
            return (
                <div>
                    <Image data={nasaInfo}/>
                    <Reaction/>
                    <Description data={nasaInfo}/>
                </div>
            )
        }
    }

    return (
        <Container>
            {loadingCheck()}
        </Container>
    )
}

export default NasaContainer;

const Container = styled.div`
    text-align: center;
    max-width: 1680px;
    overflow: hidden;
    margin: 0 auto;
`