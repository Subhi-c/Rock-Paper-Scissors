function Scorecard({ score, setscore }) {
  return (
    <>
      <div className="score-card">
        <div className="title-card white">
          <div>
            <h2>ROCK</h2>
          </div>
          <div>
            <h2>PAPER</h2>
          </div>
          <div>
            <h2>SCISSORS</h2>
          </div>
        </div>
        <div className="score">
          <div className="m-10">
            <p>SCORE</p>
          </div>
          <div>
            <h2 className="f-24">{score}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Scorecard;
