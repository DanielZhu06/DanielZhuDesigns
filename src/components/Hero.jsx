import { FaLinkedin, FaGithub } from "react-icons/fa";
import me from "../assets/me.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        px-[7%]
        pt-40
      "
    >
      <div
        className="
          w-full
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-20
        "
      >
        {/* LEFT */}
        <div className="slide-in-left">
          <h2 className="text-6xl md:text-7xl font-semibold">
            Portfolio
          </h2>

          <h1
            className="
              text-yellow-400
              text-7xl
              md:text-[9rem]
              font-extrabold
              leading-none
            "
          >
            Daniel Zhu
          </h1>

          <div className="w-[80%] h-[3px] bg-yellow-400 my-10" />

          {/* SOCIAL ICONS */}
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/danielzhu11106/"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-yellow-400 transition icon-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/DanielZhu06"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-yellow-400 transition icon-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="slide-in-right">
          <img
            src={me}
            alt="Daniel Zhu"
            className="
              w-full max-w-[500px]
              rounded-[20px]
              object-cover
              saturate-150
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;