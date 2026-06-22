import { useState, useEffect } from "react";

import Setup from "../components/memoryGame/Setup";
import GameBoard from "../components/memoryGame/GameBoard";
import Results from "../components/memoryGame/Results";
import { THEMES } from "../components/memoryGame/themeConfig";
import {
  calculateRoundScore,
  loadHighScore,
  saveHighScore,
  loadBestStreak,
  saveBestStreak
} from "../components/memoryGame/scoring";


function MemoryExpedition() {

  const [screen, setScreen] = useState("setup");

  const [settings, setSettings] = useState({
    difficulty: "Explorer",
    theme: "jungle"
  });

  // streak = consecutive full clears in a row (resets on any miss)
  const [streak, setStreak] = useState(0);

  // running total for this play session
  const [sessionScore, setSessionScore] = useState(0);

  const [highScore, setHighScore] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  const [lastRound, setLastRound] = useState(null);


  // load persisted records once on mount
  useEffect(() => {
    setHighScore(loadHighScore());
    setBestStreak(loadBestStreak());
  }, []);


  const theme =
    THEMES[settings.theme] || THEMES.jungle;


  function handleFinish({ success, correctTiles, totalTiles }) {

    const streakAfter = success ? streak + 1 : 0;

    const {
      tileScore,
      streakBonus,
      total
    } = calculateRoundScore({
      correctTiles,
      totalTiles,
      difficulty: settings.difficulty,
      success,
      streakAfter
    });

    const newSessionScore = sessionScore + total;

    setStreak(streakAfter);
    setSessionScore(newSessionScore);

    let beatHighScore = false;

    if (newSessionScore > highScore) {
      beatHighScore = true;
      setHighScore(newSessionScore);
      saveHighScore(newSessionScore);
    }

    if (streakAfter > bestStreak) {
      setBestStreak(streakAfter);
      saveBestStreak(streakAfter);
    }

    setIsNewHighScore(beatHighScore);

    setLastRound({
      success,
      correctTiles,
      totalTiles,
      tileScore,
      streakBonus,
      roundTotal: total,
      difficulty: settings.difficulty,
      streak: streakAfter
    });

    setScreen("results");
  }

  return (

    <div
      className="
        expedition-font
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        text-white
      "
    >

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${theme.bgImage})`
        }}
      />

      {/* Theme-colored tint over the photo, for legibility + mood */}
      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          opacity-75
          transition-colors
          duration-700
          ${theme.pageGradient}
        `}
      />

      <div className="relative z-10">
        {
          screen === "setup" && (
            <Setup
              settings={settings}
              setSettings={setSettings}
              start={() => setScreen("game")}
            />
          )
        }

        {
          screen === "game" && (
            <GameBoard
              settings={settings}
              finish={handleFinish}
            />
          )
        }

        {
          screen === "results" && (
            <Results
              round={lastRound}
              streak={streak}
              sessionScore={sessionScore}
              highScore={highScore}
              bestStreak={bestStreak}
              isNewHighScore={isNewHighScore}
              restart={() => setScreen("setup")}
            />
          )
        }
      </div>
    </div>
  );
}

export default MemoryExpedition;