import React, { useEffect, useState } from "react";
function Usercomponent({
  youpicked,
  setyoupicked,
  youWin,
  setyouWin,
  userpicked,
  setuserpicked,
  isPaper,
  setisPaper,
  isRock,
  setisRock,
  isScissors,
  setisScissors,
}) {
  const [bgImage, setBgImage] = useState(
    "url(./assets/images/bg-triangle.svg)"
  );
  function handleUserChoice(choice) {
    console.log(choice);
    setyoupicked(true);
    if (choice == "paper") {
      setisPaper(true);
      setuserpicked(0);
    }
    if (choice == "rock") {
      setisRock(true);
      setuserpicked(1);
    }
    if (choice == "scissors") {
      setisScissors(true);
      setuserpicked(2);
    }
  }
  useEffect(() => {
    console.log(userpicked, "user picked");
  }, [userpicked]);
  return (
    <>
      {!youpicked ? (
        <div className="background">
          <div className="container">
            <div className={!youpicked ? "pyramid" : "removeBg"}>
              <div className="row top">
                <div className="img paper">
                  <img
                    src="./src/assets/images/icon-paper.svg"
                    alt="Image 2"
                    className="pyramid-img"
                    onClick={() => handleUserChoice("paper")}
                  />
                </div>
                <div className="img scissors">
                  <img
                    src="./src/assets/images/icon-scissors.svg"
                    alt="Image 3"
                    className="pyramid-img"
                    onClick={() => handleUserChoice("scissors")}
                  />
                </div>
              </div>
              <div className="row bottom">
                <div className="img rock">
                  <img
                    src="./src/assets/images/icon-rock.svg"
                    alt="Image 1"
                    className="pyramid-img"
                    onClick={() => handleUserChoice("rock")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="background">
            <div className="">
              <div className="pyramid" style={{ backgroundImage: bgImage }}>
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
                  {isScissors ? (
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
                  {isRock ? (
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
      )}
    </>
  );
}
export default Usercomponent;
