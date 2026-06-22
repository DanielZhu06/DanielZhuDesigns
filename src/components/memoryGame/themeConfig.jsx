export const THEMES = {
  jungle: {
    label: "🌲 Jungle",
    bgImage: "https://images.pexels.com/photos/5097133/pexels-photo-5097133.jpeg?auto=compress&cs=tinysrgb&w=1920",
    pageGradient: "from-emerald-950 via-green-900 to-lime-950",
    boardBg: "bg-emerald-950/40 border border-emerald-400/20",
    accentGlow: "shadow-[0_0_30px_rgba(132,204,22,0.15)]",
    titleColor: "text-lime-300",
    tileIdle: "bg-emerald-50/10",
    tilePath: "bg-lime-400",
    tileSelected: "bg-yellow-400",
    tileStart: "bg-green-500",
    tileEnd: "bg-red-500"
  },

  arctic: {
    label: "❄ Arctic",
    bgImage: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1920",
    pageGradient: "from-sky-950 via-slate-800 to-cyan-950",
    boardBg: "bg-sky-950/40 border border-cyan-300/20",
    accentGlow: "shadow-[0_0_30px_rgba(125,211,252,0.15)]",
    titleColor: "text-cyan-200",
    tileIdle: "bg-sky-50/10",
    tilePath: "bg-cyan-300",
    tileSelected: "bg-blue-300",
    tileStart: "bg-emerald-400",
    tileEnd: "bg-rose-400"
  },

  space: {
    label: "🚀 Space",
    bgImage: "https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&w=1920",
    pageGradient: "from-indigo-950 via-purple-950 to-black",
    boardBg: "bg-indigo-950/40 border border-purple-400/20",
    accentGlow: "shadow-[0_0_30px_rgba(192,132,252,0.15)]",
    titleColor: "text-purple-300",
    tileIdle: "bg-indigo-50/10",
    tilePath: "bg-purple-400",
    tileSelected: "bg-pink-400",
    tileStart: "bg-green-400",
    tileEnd: "bg-red-400"
  }
};

export const THEME_KEYS = Object.keys(THEMES);