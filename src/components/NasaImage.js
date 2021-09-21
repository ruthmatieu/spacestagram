import React from "react";

const NasaImage = (props) => {
    console.log('DATA', props.data)
    return (

        <div>
            <img src={props.data.hdurl} alt={props.data.copyright} style={{width: '40%'}}/>
        </div>
    )
}

export default NasaImage;