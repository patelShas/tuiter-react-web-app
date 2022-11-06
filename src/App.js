import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world.js";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
                  <Route path={"/*"}
                         element={<Labs/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
