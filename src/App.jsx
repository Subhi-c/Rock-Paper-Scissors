import { useState } from "react";
import "./App.css";
import Usercomponent from "./components/Usercomponent";
import ComputerComponent from "./components/Computercomponent";
import Scorecard from "./components/Scorecard";
import Resultcomponent from "./components/Resultcomponent";
import Rules from "./components/Rules";

function App() {
  const [youpicked, setyoupicked] = useState(false);
  const [userpicked, setuserpicked] = useState(0);
  const [cmppicked, setcmppicked] = useState(false);
  const [youWin, setyouWin] = useState(false);
  const [score, setscore] = useState(0);
  const [result, setresult] = useState("");
  const [isComPaper, setisComPaper] = useState(false);
  const [isComRock, setisComRock] = useState(false);
  const [isComScissors, setisComScissors] = useState(false);
  const [isPaper, setisPaper] = useState(false);
  const [isRock, setisRock] = useState(false);
  const [isScissors, setisScissors] = useState(false);
  return (
    <>
      <Scorecard score={score} setscore={setscore} />
      <div className={youpicked ? "d-flex" : "d-flexini"}>
        <Usercomponent
          youpicked={youpicked}
          setyoupicked={setyoupicked}
          youWin={youWin}
          setyouWin={setyouWin}
          userpicked={userpicked}
          setuserpicked={setuserpicked}
          isPaper={isPaper}
          setisPaper={setisPaper}
          isRock={isRock}
          setisRock={setisRock}
          isScissors={isScissors}
          setisScissors={setisScissors}
        />
        {youpicked ? (
          <ComputerComponent
            cmppicked={cmppicked}
            setcmppicked={setcmppicked}
            youWin={youWin}
            setyouWin={setyouWin}
            userpicked={userpicked}
            setuserpicked={setuserpicked}
            result={result}
            setresult={setresult}
            score={score}
            setscore={setscore}
            isComPaper={isComPaper}
            setisComPaper={setisComPaper}
            isComRock={isComRock}
            setisComRock={setisComRock}
            isComScissors={isComScissors}
            setisComScissors={setisComScissors}
          />
        ) : (
          ""
        )}
      </div>
      <div className="d-flexCol">
        <Resultcomponent
          result={result}
          setresult={setresult}
          setyoupicked={setyoupicked}
          setisPaper={setisPaper}
          setisRock={setisRock}
          setisScissors={setisScissors}
          setisComPaper={setisComPaper}
          setisComRock={setisComRock}
          setisComScissors={setisComScissors}
        />
      </div>
      <footer className="footer">
        <Rules />
      </footer>
    </>
  );
}

export default App;
