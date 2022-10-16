import whos from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
    <div class="list-group-item"><b>Who to follow</b></div><br/>
    ${
        whos.map(who => {
            return WhoToFollowListItem(who)
        }).join("")
    }
   `);
}

export default WhoToFollowList;