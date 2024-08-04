import React, { useEffect, useState } from "react";

function ComputerComponent({
  cmppicked,
  setcmppicked,
  youWin,
  setyouWin,
  userpicked,
  setuserpicked,
  result,
  setresult,
  score,
  setscore,
  isComPaper,
  setisComPaper,
  isComRock,
  setisComRock,
  isComScissors,
  setisComScissors,
}) {
  const [cmpChoice, setcmpChoice] = useState(null);

  useEffect(() => {
    // Generate a random choice for the computer
    const choice = Math.floor(Math.random() * 3);
    setcmpChoice(choice);
  }, []); // Empty dependency array to ensure it only runs once on mount

  useEffect(() => {
    if (cmpChoice === null) return;

    console.log("Computer choice:", cmpChoice);

    if (cmpChoice === 0) {
      setisComPaper(true);
      if (userpicked === 0) {
        setresult("DRAW");
      } else if (userpicked === 2) {
        setresult("YOU WIN");
        setscore((p) => p + 5);
      } else {
        setresult("YOU LOST");
        setscore(0);
      }
    } else if (cmpChoice === 1) {
      setisComRock(true);
      if (userpicked === 1) {
        setresult("DRAW");
      } else if (userpicked === 0) {
        setresult("YOU WIN");
        setscore((p) => p + 5);
      } else {
        setresult("YOU LOST");
        setscore(0);
      }
    } else if (cmpChoice === 2) {
      setisComScissors(true);
      if (userpicked === 2) {
        setresult("DRAW");
      } else if (userpicked === 0) {
        setresult("YOU WIN");
        setscore((p) => p + 5);
      } else {
        setresult("YOU LOST");
        setscore(0);
      }
    }
  }, [
    cmpChoice,
    userpicked,
    setisComPaper,
    setisComRock,
    setisComScissors,
    setresult,
    setscore,
  ]);

  return (
    <>
      <div className="cmpbackground">
        <div className="">
          <div className="pyramid" style={{ backgroundImage: "unset" }}>
            <div className="center">
              {isComPaper && (
                <>
                  <p className="picked">HOUSE PICKED</p>
                  <div className="imgselected paper">
                    <img
                      src="./src/assets/images/icon-paper.svg"
                      alt="Image 2"
                      className="pyramid-img"
                    />
                  </div>
                </>
              )}
              {isComRock && (
                <>
                  <p className="picked">HOUSE PICKED</p>
                  <div className="imgselected rock">
                    <img
                      src="./src/assets/images/icon-rock.svg"
                      alt="Image 1"
                      className="pyramid-img"
                    />
                  </div>
                </>
              )}
              {isComScissors && (
                <>
                  <p className="picked">HOUSE PICKED</p>
                  <div className="imgselected scissors">
                    <img
                      src="./src/assets/images/icon-scissors.svg"
                      alt="Image 3"
                      className="pyramid-img"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComputerComponent;
