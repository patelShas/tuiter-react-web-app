import React from "react";

const TuitStats = (
    {
        post = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
        }
    }
) => {
    return (
        <div className={"row"}>
            <div className={"col-3"}><i className="bi bi-chat"></i> {post.replies}</div>
            <div className={"col-3"}><i className="bi bi-arrow-repeat"></i> {post.retuits}</div>
            <div className={"col-3"}>{post.liked ?
                <i className="bi bi-heart-fill text-danger"></i> :
                <i className="bi bi-heart"></i>}
                {" "}{post.likes}</div>
            <div className={"col-3"}><i className="bi bi-share"></i></div>
        </div>
    )
}

export default TuitStats