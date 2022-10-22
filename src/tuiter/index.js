import {Link} from "react-router-dom";
import Nav from "../nav.js";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryList from "./post-summary-list";
import ExploreComponent from "./explore/index.js";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <ExploreComponent/>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter