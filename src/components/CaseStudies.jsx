import { Link } from "react-router-dom";

const projects = [
  {
    title: "Bike Repair",
    text: "Design 1: a service site.",
    image:
      "https://cdnmedia.endeavorsuite.com/images/organizations/6d35c8a9-3bbf-4d2c-ab4a-712bd98f2dcd/Close-upofamanrepairingablackmotorcyclewithascrewdriverintheworkshop.png?v=1732570786657?v=20241125224412",
  },
  {
    title: "Memory Game",
    text: "Design 2: a memory game.",
    image:
      "https://motherspet.com/blogs/wp-content/uploads/2024/06/memory-games-870x490.jpg",
  },
  {
    title: "E-Commerce Site",
    text: "Design 3: an e-commerce site.",
    image:
      "https://img.freepik.com/free-vector/flat-sale-landing-page-template-with-photo_23-2149028522.jpg",
  },
  {
    title: "Sports Analytics",
    text: "Design 4: a sports analytics site.",
    image:
      "https://cdn.dribbble.com/userupload/16724560/file/original-6a71a3b5e7d0c82390584f2dc94f06ef.png",
  },
];

function CaseStudies() {
  return (
    <section
      id="casestudies"
      className="
        min-h-screen
        bg-[#161616]
        dots-overlay
        px-[10%]
        py-32
      "
    >

      <div className="text-center mb-20">

        <h2
          className="
            text-6xl
            font-bold
            text-yellow-400
          "
        >
          Case Studies
        </h2>

      </div>

      <div
        className="
          grid
          lg:grid-cols-2
          gap-10
        "
      >

        {projects.map((project, index) => (

          <Link
            to="/coming-soon"
            key={index}
            className="group cursor-pointer block"
          >

            <img
              src={project.image}
              alt=""
              className="
                w-full
                h-[380px]
                object-cover
                rounded-3xl
                transition
                duration-300
                group-hover:scale-[1.02]
              "
            />

            <div className="mt-4">

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.text}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}

export default CaseStudies;