import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    },
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item d-flex">
            <img src={require(`../images/${tuit.image}`)} className="rounded-circle" alt={`${tuit.userName}-icon`}
                 width="48px" height="48px"/>
            <div className={"d-inline-block align-middle ps-3"}>
                <p className="text-muted">
                    <b className="text-black">{tuit.userName}</b> {tuit.handle} · {tuit.time}
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <br/>
                </p>
                <p>
                    {tuit.tuit}
                </p>
                <TuitStats post={tuit}/>
            </div>
        </li>
    );
}

export default TuitItem;