import { Link } from "react-router-dom";
import { THEMES, THEME_KEYS } from "./themeConfig";
import { ThemeIcon } from "./ThemeArt";

function Setup({
  settings,
  setSettings,
  start
}) {

  const levels = [
    "Explorer",
    "Adventurer",
    "Master"
  ];

  return (
    <div className="relative">

      <Link
        to="/"
        className="
          expedition-display
          fixed
          top-6
          left-6
          flex
          items-center
          gap-2
          pl-3
          pr-5
          py-2.5
          rounded-full
          bg-black/30
          backdrop-blur-md
          border
          border-amber-300/40
          text-amber-200
          text-sm
          tracking-widest
          uppercase
          shadow-[0_0_15px_rgba(252,211,77,0.15)]
          hover:border-amber-300/80
          hover:text-amber-100
          hover:shadow-[0_0_25px_rgba(252,211,77,0.35)]
          hover:-translate-x-1
          transition-all
          duration-300
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-amber-300"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
        Portfolio
      </Link>

      <div
        className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-3xl
          p-10
          w-[450px]
          text-center
        "
      >

        <h1 className="expedition-display text-5xl text-cyan-300">
          Trail of Memories 🧭
        </h1>

        <h2 className="expedition-display mt-8 text-2xl tracking-wide">
          Choose Difficulty
        </h2>

        <div>
          {levels.map(level => (
            <button
              key={level}
              onClick={() =>
                setSettings({
                  ...settings,
                  difficulty: level
                })
              }
              className={`
                optionBtn
                transition
                ${
                  settings.difficulty === level
                    ? "bg-cyan-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {level}
            </button>
          ))}
        </div>

        <h2 className="expedition-display mt-8 text-2xl tracking-wide">
          Choose Theme
        </h2>

        <div>
          {THEME_KEYS.map(key => (
            <button
              key={key}
              onClick={() =>
                setSettings({
                  ...settings,
                  theme: key
                })
              }
              className={`
                optionBtn
                transition
                inline-flex
                items-center
                gap-2
                ${
                  settings.theme === key
                    ? "bg-purple-500 text-white"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              <ThemeIcon themeKey={key} size={18} />
              {THEMES[key].label}
            </button>
          ))}
        </div>

        <div className="mt-5 text-gray-300">
          Selected:
          <br />
          {settings.difficulty}
          <br />
          {THEMES[settings.theme].label}
        </div>

        <button
          onClick={start}
          className="
            expedition-display
            mt-8
            px-10
            py-3
            rounded-xl
            bg-cyan-400
            text-black
            text-lg
            tracking-wide
          "
        >
          Start Game
        </button>

      </div>

    </div>
  );
}

export default Setup;