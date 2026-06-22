import { useState, useEffect } from "react";
import { THEMES } from "./themeConfig";
import { ThemeIcon } from "./ThemeArt";


function generateRandomPath(size, length) {
  const path = [];

  const allTiles = Array.from(
    { length: size * size },
    (_, i) => i
  );

  let current =
    allTiles[Math.floor(Math.random() * allTiles.length)];

  path.push(current);

  while (path.length < length) {
    const available = allTiles.filter(
      tile => !path.includes(tile)
    );

    if (available.length === 0) {
      break;
    }

    current =
      available[
        Math.floor(Math.random() * available.length)
      ];

    path.push(current);
  }

  return path;
}


function GameBoard({
  settings,
  finish
}) {

  const theme =
    THEMES[settings.theme] || THEMES.jungle;


  const difficulties = {

    Explorer: {
      size: 4,
      length: 5
    },

    Adventurer: {
      size: 5,
      length: 8
    },

    Master: {
      size: 6,
      length: 12
    }

  };



  const config =
    difficulties[
      settings.difficulty
    ];




  const [path] = useState(
    generateRandomPath(
        config.size,
        config.length
    )
    );



  const [showIndex, setShowIndex] =
    useState(0);



  const [memorizing, setMemorizing] =
    useState(true);



  const [selected, setSelected] =
    useState([]);







  // reveal path one square at a time

  useEffect(() => {


    let counter = 0;



    const timer = setInterval(() => {


      counter++;



      if(counter >= path.length) {


        clearInterval(timer);



        setTimeout(()=>{


          setMemorizing(false);


          setShowIndex(-1);



        },800);



        return;

      }



      setShowIndex(counter);



    },800);



    return () => {

      clearInterval(timer);

    };


  }, [path]);


  function chooseTile(index) {
    if (memorizing) {
        return;
    }

    const next = selected.length;

    if (index !== path[next]) {

        // wrong tile — report how many were correct before the mistake
        finish({
        success: false,
        correctTiles: selected.length,
        totalTiles: path.length
        });

        return;
    }

    const updated = [
        ...selected,
        index
    ];

    setSelected(updated);

    if (updated.length === path.length) {

        // full clear — every tile was correct
        finish({
            success: true,
            correctTiles: path.length,
            totalTiles: path.length
        });

    }

    }

  function tileStyle(index) {
    // show path during memorizing
    if (
        memorizing &&
        path.slice(0, showIndex + 1).includes(index)
    ) {
        return theme.tilePath;
    }

    // START (only during memorizing)
    if (memorizing && index === path[0]) {
        return theme.tileStart;
    }

    // END (only during memorizing)
    if (memorizing && index === path[path.length - 1]) {
        return theme.tileEnd;
    }

    // clicked tiles
    if (selected.includes(index)) {
        return theme.tileSelected;
    }

    return theme.tileIdle;
    }





  return (

    <div
      className={`
        backdrop-blur-xl
        rounded-3xl
        p-10
        text-center
        transition-colors
        duration-700
        ${theme.boardBg}
        ${theme.accentGlow}
      `}
    >



    <h1
        className={`
            expedition-display
            text-4xl
            flex
            items-center
            justify-center
            gap-2
            transition-colors
            duration-700
            ${theme.titleColor}
        `}
    >
        <ThemeIcon themeKey={settings.theme} size={28} />
        {theme.label}
    </h1>





      <p className="mt-4">


        {
          memorizing

          ?

          "Watch the route appear!"

          :

          "Repeat the route 🚩 → 🏁"

        }


      </p>





      <div

        className="grid gap-3 mt-8"

        style={{

          gridTemplateColumns:
          `repeat(${config.size},60px)`

        }}

      >



      {

        Array.from({

          length:
          config.size *
          config.size

        })

        .map((_,index)=>(



          <button


            key={index}


            onClick={() =>
              chooseTile(index)
            }



            className={`
              h-[60px]
              rounded-xl
              transition
              hover:scale-110
              ${tileStyle(index)}
            `}


          >



            {
              index === path[0]
              &&
              "🚩"
            }




            {
              index ===
              path[path.length-1]
              &&
              "🏁"
            }



          </button>



        ))

      }



      </div>




      <p className="mt-5 text-sm">

        Difficulty:
        {" "}
        {settings.difficulty}

      </p>



    </div>

  );

}


export default GameBoard;