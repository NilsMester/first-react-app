import React, {useState} from "react";

function LikeButton(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <button className="button" onClick={() => setCount(count + 1)}>Like</button>
            <p className="LikeCounter">{count} Likes</p>
        </div>
    )
}

export default LikeButton;