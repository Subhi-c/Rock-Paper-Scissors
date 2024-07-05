import React from "react";
function Usercomponent() {
  return (
    <div className="background">
      <div className="container">
        <div className="pyramid">
          <div className="row top">
            <img
              src="../../public/design/images/icon-rock.svg"
              alt="Image 1"
              className="pyramid-img"
            />
          </div>
          <div className="row bottom">
            <img
              src="../../public/design/images/icon-rock.svg"
              alt="Image 2"
              className="pyramid-img"
            />
            <img
              src="../../public/design/images/icon-rock.svg"
              alt="Image 3"
              className="pyramid-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Usercomponent;
