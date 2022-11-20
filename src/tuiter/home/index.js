import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

const HomeCompenent = () => {
    console.log(TUITS_API)
    return (
            <>
                <h4>Home</h4>
                <WhatsHappening/>
                <TuitsList/>
            </>
        )

}

export default HomeCompenent;