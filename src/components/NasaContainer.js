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
            return <h1>Loading NASA...</h1>
        } else {
            return (
                <div>
                    <Image data={nasaInfo}/>
                    <Description data={nasaInfo}/>
                    <Reaction/>
                </div>
            )
        }
    }

    return (
        <div>
            {loadingCheck()}
        </div>
    )
}

export default NasaContainer;