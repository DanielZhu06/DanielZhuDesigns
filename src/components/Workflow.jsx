const steps = [
  {
    number: 1,
    title: "Understand",
    text: "Define the problem and identify user needs and goals.",
  },
  {
    number: 2,
    title: "Research",
    text: "Look at inspiration, UI patterns, and existing solutions.",
  },
  {
    number: 3,
    title: "Ideate",
    text: "Sketch layouts and explore different design directions.",
  },
  {
    number: 4,
    title: "Design",
    text: "Define typography, colors, spacing, and visual hierarchy.",
  },
  {
    number: 5,
    title: "Build",
    text: "Develop using React, HTML, CSS, JavaScript, etc.",
  },
  {
    number: 6,
    title: "Reflect",
    text: "Review the final product and identify improvements.",
  },
];

function Workflow() {
  return (
    <section
      id="workflow"
      className="
        min-h-screen
        px-[10%]
        py-32
      "
    >

      <div
        className="
          max-w-[900px]
          mx-auto
          text-center
        "
      >

        <h2
          className="
            text-6xl
            font-bold
            text-yellow-400
            mb-10
          "
        >
          Workflow
        </h2>

        <p
          className="
            text-xl
            text-gray-300
            mb-20
            leading-loose
          "
        >
          My design process follows a structured
          step-by-step approach from understanding
          a problem to building and refining a solution.
        </p>

        <div className="relative">

          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-[2px]
              bg-yellow-400/30
              -translate-x-1/2
            "
          ></div>

          {steps.map((step, index) => (

            <div
              key={index}
              className={`
                relative
                flex
                mb-20
                fade-in
                ${index % 2 === 0 ? "justify-end" : "justify-start"}
              `}
              style={{ animationDelay: `${index * 0.12}s` }}
            >

              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  w-10
                  h-10
                  rounded-full
                  bg-yellow-400
                  text-black
                  font-bold
                  flex
                  items-center
                  justify-center
                "
              >
                {step.number}
              </div>

              <div className="w-[45%] text-left">

                <h3
                  className="
                    text-yellow-400
                    text-2xl
                    font-semibold
                    mb-2
                  "
                >
                  {step.title}
                </h3>

                <p className="text-gray-300">
                  {step.text}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;