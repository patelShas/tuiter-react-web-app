import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        post = {
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "disliked": false,
            "dislikes": 0
        }
    }
) => {
    const dispatch = useDispatch()
    const likeClickHandler = () => dispatch(updateTuitThunk({
        ...post,
        likes: post.liked ? post.likes - 1 : post.likes + 1,
        liked: !post.liked
    }))
    const dislikeClickHandler = () => dispatch(updateTuitThunk({
        ...post,
        dislikes: post.disliked ? post.dislikes - 1 : post.dislikes + 1,
        disliked: !post.disliked
    }))
    return (
        <div className={"row"}>
            <div className={"col-2"}><i className="bi bi-chat"></i> {post.replies}</div>
            <div className={"col-2"}><i className="bi bi-arrow-repeat"></i> {post.retuits}</div>
            <div className={"col-3"}>{post.liked ?
                <i className="bi bi-heart-fill text-danger" onClick={likeClickHandler}></i> :
                <i className="bi bi-heart" onClick={likeClickHandler}></i>}
                {" "}{post.likes}</div>
            <div className={"col-3"}>{post.disliked ?
                <i className="bi bi-hand-thumbs-down-fill text-danger" onClick={dislikeClickHandler}></i> :
                <i className="bi bi-hand-thumbs-down" onClick={dislikeClickHandler}></i>}
                {" "}{post.dislikes}</div>
            <div className={"col-2"}><i className="bi bi-share"></i></div>
        </div>
    )
}

export default TuitStats