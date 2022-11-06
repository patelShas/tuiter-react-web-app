import Assignment6 from "./a6/index.js";
import Assignment7 from "./a7/index.js";
import Nav from "../nav.js";
import {Routes, Route} from "react-router-dom";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="/a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>

    );
}
export default Labs;