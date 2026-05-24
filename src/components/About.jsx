function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        bg-[#161616]
        dots-overlay
        px-[10%]
        py-32
        flex
        items-center
      "
    >

      <div
        className="
          grid
          lg:grid-cols-2
          gap-24
          w-full
        "
      >

        {/* LEFT */}

        <div className="slide-in-left">

          <p
            className="
              text-yellow-400
              text-3xl
              mb-6
            "
          >
            Who's Daniel?
          </p>

          <h2
            className="
              text-5xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            Designing clean and modern digital experiences.
          </h2>

        </div>

        {/* RIGHT */}
        <div className="slide-in-right delay-1">
          <div
            className="
              text-gray-300
              text-xl
              leading-loose
              space-y-8
            "
          >

            <p>
              Hi, I’m Daniel,
            </p>

            <p>
              A second year at the University of Ottawa,
              majoring in Software Engineering.
              This portfolio documents my growth throughout
              the semester and showcases the projects,
              workflows, and case studies I develop along the way.
            </p>

            <p>
              Since I was a child I've been immersed in the elements of design by my graphic designer older sister.
              Thanks to this, I've developed a passion for quality UI/UX in all my works. But outside of my software engineer life,
              I try to be a little bit of everything: guitarist, sports fan/athlete, gamer, reader, and anything that catches my interest.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;