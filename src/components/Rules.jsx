function Rules() {
  const ismobileView =
    window.screen.height < 500 && window.screen.width < 400 ? true : false;
  return (
    <>
      <div>
        {!ismobileView ? (
          <div>
            <img
              src="../../public/design/original/desktop-rules-modal.jpg"
              alt="desktop rules"
            />
          </div>
        ) : (
          <div>
            <img
              src="../../public/design/original/mobile-rules-modal.jpg"
              alt="mobile rules"
            />
          </div>
        )}
      </div>
    </>
  );
}
