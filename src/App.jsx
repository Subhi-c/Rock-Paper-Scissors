import { useState } from "react";
import "./App.css";
import Computercomponent from "./components/Computercomponent";
import Scorecard from "./components/Scorecard";
import Usercomponent from "./components/Usercomponent";

function App() {
  const [youpicked, setyoupicked] = useState(false);
  return (
    <>
      <Scorecard />
      <div className="d-flex">
        <Usercomponent youpicked={youpicked} setyoupicked={setyoupicked} />
        {youpicked ? <Computercomponent /> : ""}
      </div>
    </>
  );
}

export default App;
