import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "username": "SpaceX",
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
        dispatch(deleteTuitThunk(id));
    }
    const img = tuit.image ?
        require(`../images/${tuit.image}`) :
        `../images/${tuit.image}`
    return (
        <li className="list-group-item d-flex">
            <img src={img} className="rounded-circle" alt={`${tuit.username}-icon`}
                 width="48px" height="48px"/>
            <div className={"d-inline-block align-middle ps-3"}>
                <p className="text-muted">
                    <b className="text-black">{tuit.username}</b> {tuit.handle} · {tuit.time}
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