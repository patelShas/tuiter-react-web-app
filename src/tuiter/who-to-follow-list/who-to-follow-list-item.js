import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <div className="list-group-item">

            <img src={require(`../images/${who.avatarIcon}`)} className="rounded-circle" alt={`${who.handle}-icon`}
                 width="48px" height="48px"/>
            <div className="d-inline-block align-middle"><b>{who.userName}</b><br/>@{who.handle}</div>
            <button className="btn btn-primary rounded-pill float-end">
                Follow
            </button>
                <br/>
        </div>
    );
};
export default WhoToFollowListItem;