function Resultcomponent({
  result,
  setresult,
  setyoupicked,
  setisPaper,
  setisRock,
  setisScissors,
  setisComPaper,
  setisComRock,
  setisComScissors,
}) {
  function handleTryAgain() {
    setyoupicked(false);
    setisPaper(false);
    setisRock(false);
    setisScissors(false);
    setisComPaper(false);
    setisComRock(false);
    setisComScissors(false);
    setresult("");
  }
  return (
    <>
      {result && (
        <>
          <p className="p-24">{result}</p>
          <button onClick={handleTryAgain}>Try Again</button>
        </>
      )}
    </>
  );
}
export default Resultcomponent;
