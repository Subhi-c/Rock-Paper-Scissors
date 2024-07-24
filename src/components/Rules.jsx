import { useState } from "react";

function Rules() {
  const isMobileView =
    window.screen.height < 500 && window.screen.width < 400 ? true : false;
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOpenPopup(!openPopup)}>Rules</button>
      </div>
      {openPopup && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <button
              style={closeButtonStyle}
              onClick={() => setOpenPopup(false)}
            >
              &times;
            </button>
            {!isMobileView ? (
              <div>
                <img
                  src="./src/assets/images/image-rules.svg"
                  alt="desktop rules"
                />
              </div>
            ) : (
              <div>
                <img
                  src="./src/assets/design/original/mobile-rules-modal.jpg"
                  alt="mobile rules"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle = {
  position: "relative",
  backgroundColor: "white",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  textAlign: "center",
};

const closeButtonStyle = {
  position: "absolute",
  top: "-10px",
  right: "-10px",
  background: "none",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};

export default Rules;
