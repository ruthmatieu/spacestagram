import React, { useState } from "react";
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
        <div>
            {count <= 0 ? <p>Be the first to like this post</p>
            : count === 1 ? <p>{count} like</p>
            : <p>{count} likes</p>
            }
            <button><AiFillLike onClick={likeImage} style={{color: 'green'}}/></button>
            <button><AiFillDislike onClick={dislikeImage} style={{color: 'red'}}/></button>
        </div>
    )
}

export default NasaReaction;