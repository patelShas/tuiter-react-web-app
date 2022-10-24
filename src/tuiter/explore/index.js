import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>


            <ul className="nav nav-tabs p-3">
                <li className="nav-item">
                    <a className="nav-link active" href={"/#"}>For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/#"}>Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/#"}>News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/#"}>Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/#"}>ntertainment</a>
                </li>
            </ul>

            <div className="card bg-dark text-white">
                <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg"
                     className="card-img"
                     alt="elon-rocket"/>
                <div className="card-img-overlay">
                    <div className="position-absolute bottom-0 start-0 p-3">
                        <h1 className="card-title">SpaceX's Starship</h1>
                    </div>
                </div>
            </div>

            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;