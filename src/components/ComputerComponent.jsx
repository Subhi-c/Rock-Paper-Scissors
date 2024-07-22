import React, { useEffect, useState } from "react";
function Computercomponent({
  cmppicked,
  setcmppicked,
  youWin,
  setyouWin,
  userpicked,
  setuserpicked,
  result,
  setresult,
}) {
  const [isPaper, setisPaper] = useState(false);
  const [isRock, setisRock] = useState(false);
  const [isScissors, setisScissors] = useState(false);
  const [cmpChoice, setcmpChoice] = useState(0);
  function handleUserChoice(choice) {
    console.log(choice);
    //setyoupicked(true);
    if (choice == 0) {
      setisPaper(true);
      if (userpicked == 0) {
        setresult("DRAW");
      } else if (choice == 1) {
        setresult("YOU WIN");
      } else {
        setresult("YOU LOST");
      }
    }
    if (choice == 1) {
      setisRock(true);
      if (userpicked == 1) {
        setresult("DRAW");
      } else if (choice == 0) {
        setresult("YOU WIN");
      } else {
        setresult("YOU LOST");
      }
    }
    if (choice == 2) {
      setisScissors(true);
      if (userpicked == 2) {
        setresult("DRAW");
      } else if (choice == 0) {
        setresult("YOU WIN");
      } else {
        setresult("YOU LOST");
      }
    }
  }
  useEffect(() => {
    setcmpChoice(Math.floor(Math.random() * 3));
    handleUserChoice(cmpChoice);
  }, []);
  return (
    <>
      <div className="cmpbackground">
        <div className="container">
          <div className="pyramid">
            <div className="center">
              {isPaper ? (
                <>
                  <p className="picked">YOU PICKED</p>
                  <div className="imgselected paper">
                    <img
                      src="./src/assets/images/icon-paper.svg"
                      alt="Image 2"
                      className="pyramid-img"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {isRock ? (
                <>
                  <p className="picked">YOU PICKED</p>
                  <div className="imgselected scissors">
                    <img
                      src="./src/assets/images/icon-scissors.svg"
                      alt="Image 3"
                      className="pyramid-img"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="row bottom">
              {isScissors ? (
                <>
                  <p className="picked">YOU PICKED</p>
                  <div className="imgselected rock">
                    <img
                      src="./src/assets/images/icon-rock.svg"
                      alt="Image 1"
                      className="pyramid-img"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Computercomponent;
