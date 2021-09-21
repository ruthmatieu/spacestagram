import React, { useState } from "react";
import styled from 'styled-components';

import { AiFillLike } from 'react-icons/ai';
import { AiFillDislike } from 'react-icons/ai';

const NasaReaction = () => {
    const [count, setCount] = useState(0);

    const likeImage = () => {
        setCount(count + 1)
    }

    const dislikeImage = () => {
        setCount(count - 1)
    }

    return (
        <Container>
            {count <= 0 ? <p>Be the first to like this post</p>
            : count === 1 ? <p>{count} like</p>
            : <p>{count} likes</p>
            }
            <button><AiFillLike onClick={likeImage} style={{color: 'green'}}/></button>
            <button><AiFillDislike onClick={dislikeImage} style={{color: 'red'}}/></button>
        </Container>
    )
}

export default NasaReaction;

const Container = styled.div`
    
`