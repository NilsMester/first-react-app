import React, {useState} from "react";
import LikeButton from "./LikeButton";

function LikeSection(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <LikeButton onClick={() => setCount(count + 1)}>Like</LikeButton>
            <p className="LikeCounter">{count} Likes</p>
        </div>
    )
}

export default LikeSection;