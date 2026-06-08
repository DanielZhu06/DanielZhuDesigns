import { Link } from "react-router-dom";

const projects = [
  {
    title: "AutoGlow",
    text: "Luxury car detailing website built using User-Centered Design.",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9",
    route: "/autoglow",
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
      className="min-h-screen bg-[#161616] dots-overlay px-[10%] py-32"
    >
      <div className="text-center mb-20">
        <h2 className="text-6xl font-bold text-yellow-400">
          Case Studies
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => {
          const content = (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[380px] object-cover rounded-3xl transition duration-300 group-hover:scale-[1.02]"
              />

              <div className="mt-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-400">
                  {project.text}
                </p>
              </div>
            </>
          );

          return (
            <Link
              key={index}
              to={project.route ? project.route : "/coming-soon"}
              className="group cursor-pointer block"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CaseStudies;