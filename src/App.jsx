import { useState } from "react";
import "./App.css";
import Computercomponent from "./components/Computercomponent";
import Scorecard from "./components/Scorecard";
import Usercomponent from "./components/Usercomponent";
import Resultcomponent from "./components/Resultcomponent";

function App() {
  const [youpicked, setyoupicked] = useState(false);
  const [userpicked, setuserpicked] = useState();
  const [cmppicked, setcmppicked] = useState(false);
  const [youWin, setyouWin] = useState(false);

  const [result, setresult] = useState("");
  return (
    <>
      <Scorecard />
      <div className="d-flex">
        <Usercomponent
          youpicked={youpicked}
          setyoupicked={setyoupicked}
          youWin={youWin}
          setyouWin={setyouWin}
          userpicked={userpicked}
          setuserpicked={setuserpicked}
        />
        {youpicked ? (
          <Computercomponent
            cmppicked={cmppicked}
            setcmppicked={setcmppicked}
            youWin={youWin}
            setyouWin={setyouWin}
            userpicked={userpicked}
            setuserpicked={setuserpicked}
            result={result}
            setresult={setresult}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        <Resultcomponent
          result={result}
          setresult={setresult}
          setyoupicked={setyoupicked}
        />
      </div>
    </>
  );
}

export default App;
