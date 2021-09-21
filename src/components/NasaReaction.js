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
            <div className="reaction">
                { 
                    count <= 0 ? <p>Be the first to like this post</p>
                    : count === 1 ? <p>{count} like</p>
                    : <p>{count} likes</p>
                }
            </div>
            <div className="btns">
                <button onClick={likeImage} className="like"><AiFillLike style={{color: '#28C602'}} size={22}/></button>
                <button onClick={dislikeImage} className="dislike"><AiFillDislike style={{color: 'red'}} size={22}/></button>
            </div>
        </Container>
    )
}

export default NasaReaction;

const Container = styled.div`
    text-align: left;
    margin-left: 25%;

    .reaction {
        font-size: 0.9rem;
    }

    .like, .dislike {
        padding: 0.5rem 1.2rem;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
    }

    .like:hover, .dislike:hover {
        cursor: pointer;
        background-color: #e7fce3;
    }

    .like:hover {
        background-color: #e7fce3;
    }

    .dislike:hover {
        background-color: #ffe8e8;
    }

    .like {
        margin-right: 1rem;
    }
`