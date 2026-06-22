export const DIFFICULTY_WEIGHT = {
  Explorer: 1,
  Adventurer: 2,
  Master: 3
};

const HIGH_SCORE_KEY = "memoryExpedition.highScore";
const BEST_STREAK_KEY = "memoryExpedition.bestStreak";


// Tile accuracy score + streak bonus (weighted by difficulty) for one round
export function calculateRoundScore({
  correctTiles,
  totalTiles,
  difficulty,
  success,
  streakAfter
}) {

  const weight = DIFFICULTY_WEIGHT[difficulty] || 1;

  const accuracy =
    totalTiles > 0 ? correctTiles / totalTiles : 0;

  // up to 100 points per tile-accuracy, scaled by difficulty
  const tileScore = Math.round(accuracy * 100 * weight);

  // only awarded on a full, successful clear —
  // grows with both the streak length and this round's difficulty
  const streakBonus = success
    ? Math.round(streakAfter * 25 * weight)
    : 0;

  return {
    tileScore,
    streakBonus,
    total: tileScore + streakBonus
  };
}


export function loadHighScore() {
  const stored = localStorage.getItem(HIGH_SCORE_KEY);
  return stored ? Number(stored) : 0;
}

export function saveHighScore(score) {
  localStorage.setItem(HIGH_SCORE_KEY, String(score));
}


export function loadBestStreak() {
  const stored = localStorage.getItem(BEST_STREAK_KEY);
  return stored ? Number(stored) : 0;
}

export function saveBestStreak(streak) {
  localStorage.setItem(BEST_STREAK_KEY, String(streak));
}