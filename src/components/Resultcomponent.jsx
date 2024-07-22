function Resultcomponent({ result, setresult, setyoupicked }) {
  function handleTryAgain() {
    setyoupicked(false);
    setresult("");
  }
  return (
    <>
      {result && (
        <>
          <p>{result}</p>
          <button onClick={handleTryAgain}>Try Again</button>
        </>
      )}
    </>
  );
}
export default Resultcomponent;
