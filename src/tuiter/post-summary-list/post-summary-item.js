import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "spacex.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row d-flex align-items-center">
                <div className="col-8">
                    <p className="text-muted">
                        {post.topic}<br/>
                        <b className="text-black">{post.userName}</b> · {post.time}<br/>
                        <span className="text-black">{post.title}</span>
                        {post.tweets ? post.tweets : ""}
                    </p>
                </div>
                <div className="col-4">
                    <img src={require(`../images/${post.image}`)}
                         className="img-fluid float-end rounded" alt={`${post.userName}-icon`} width={70}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;