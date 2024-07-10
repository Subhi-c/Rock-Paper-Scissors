import React, { useState } from "react";
function Usercomponent({ youpicked, setyoupicked }) {
  const [bgImage, setBgImage] = useState(
    "url(./assets/images/bg-triangle.svg)"
  );
  const [isPaper, setisPaper] = useState(false);
  const [isRock, setisRock] = useState(false);
  const [isScissors, setisScissors] = useState(false);
  function handleUserChoice(choice) {
    console.log(choice);
    setyoupicked(true);
    if (choice == "paper") setisPaper(true);
    if (choice == "rock") setisRock(true);
    if (choice == "scissors") setisScissors(true);
  }
  console.log(youpicked, "you picked");
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
        <div className="background">
          <div className="container">
            <div className="pyramid" style={{ backgroundImage: bgImage }}>
              <div className="row top">
                {isPaper ? (
                  <div className="img paper">
                    <img
                      src="./src/assets/images/icon-paper.svg"
                      alt="Image 2"
                      className="pyramid-img"
                    />
                  </div>
                ) : (
                  ""
                )}
                {isRock ? (
                  <div className="img scissors">
                    <img
                      src="./src/assets/images/icon-scissors.svg"
                      alt="Image 3"
                      className="pyramid-img"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="row bottom">
                {isScissors ? (
                  <div className="img rock">
                    <img
                      src="./src/assets/images/icon-rock.svg"
                      alt="Image 1"
                      className="pyramid-img"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Usercomponent;
