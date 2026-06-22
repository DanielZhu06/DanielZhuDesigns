function Results({
  round,
  streak,
  sessionScore,
  highScore,
  bestStreak,
  isNewHighScore,
  restart
}) {

  if (!round) {
    return null;
  }

  return (

    <div
      className="
        bg-white/10
        backdrop-blur-xl
        rounded-3xl
        p-10
        w-[420px]
        text-center
      "
    >

      <h1
        className="
          expedition-display
          text-4xl
          text-cyan-300
        "
      >
        Expedition Complete 🧭
      </h1>

      {
        isNewHighScore && (
          <p className="mt-3 text-amber-300 font-semibold tracking-wide">
            🏆 New High Score!
          </p>
        )
      }

      {
        round.success
        ? (
          <p className="mt-5 text-xl">
            Route remembered successfully!
          </p>
        )
        : (
          <p className="mt-5 text-xl">
            The expedition failed!
          </p>
        )
      }

      <p className="mt-2 text-gray-300">
        {round.correctTiles} / {round.totalTiles} tiles correct
        {" "}
        ({round.difficulty})
      </p>


      {/* Round breakdown */}
      <div
        className="
          mt-6
          bg-black/20
          rounded-2xl
          p-4
          text-left
          text-sm
          space-y-1
        "
      >
        <div className="flex justify-between">
          <span>Tile accuracy</span>
          <span>{round.tileScore} pts</span>
        </div>

        {
          round.streakBonus > 0 && (
            <div className="flex justify-between text-amber-300">
              <span>Streak bonus</span>
              <span>+{round.streakBonus} pts</span>
            </div>
          )
        }

        <div className="flex justify-between font-bold border-t border-white/20 mt-2 pt-2">
          <span>Round total</span>
          <span>{round.roundTotal} pts</span>
        </div>
      </div>


      {/* Streak + session stats */}
      <div className="mt-5 text-gray-300 text-sm space-y-1">

        <div>
          {
            streak > 0
            ? `🔥 ${streak} in a row`
            : "Streak reset"
          }
          {" "}
          (best: {bestStreak})
        </div>

        <div>
          Session score: <span className="text-white font-semibold">{sessionScore}</span>
        </div>

        <div>
          High score: <span className="text-amber-300 font-semibold">{highScore}</span>
        </div>

      </div>


      <h2 className="expedition-display text-2xl mt-6 tracking-wide">
        Score: {round.roundTotal}
      </h2>


      <button
        onClick={restart}
        className="optionBtn expedition-display tracking-wide mt-5"
      >
        Try Again
      </button>

    </div>

  );

}


export default Results;