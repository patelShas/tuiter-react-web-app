import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center">
            <div class="rounded-pill border border-dark p-1 col-11">
                <i class="fas fa-search ps-3"></i>
                <input type="text" class="border-0 w-75" placeholder="Search"></input>
            </div>
            <div class="col-1">
                <i class="fas fa-cog fa-2x" style="color: deepskyblue"></i>
            </div>

        </div>


        <ul class="nav nav-tabs p-3">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="card bg-dark text-white">
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/for_press_release.jpg" class="card-img"
                 alt="elon-rocket">
            <div class="card-img-overlay">
                <div class="position-absolute bottom-0 start-0 p-3">
                    <h1 class="card-title">SpaceX's Starship</h1>
                </div>
            </div>
        </div>
        
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
