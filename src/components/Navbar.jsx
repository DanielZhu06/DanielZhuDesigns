import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const linkClass = (delay) => `
    inline-block
    transition-all duration-700 ease-out
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
    [transition-delay:${delay}ms]
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0de6] backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-[7%] py-6 grid grid-cols-3 items-center">

        {/* LEFT */}
        <div className="text-yellow-400 text-4xl font-bold animate-[logoDrop_0.7s_ease-out_forwards]">
          Daniel Zhu
        </div>

        {/* CENTER */}
        <nav className="flex justify-center">
          <ul className="flex gap-8 text-lg items-center">
            <li className={linkClass(0)}>
              <a href="#home" className="hover:text-yellow-400">Home</a>
            </li>

            <li className={linkClass(100)}>
              <a href="#about" className="hover:text-yellow-400">About</a>
            </li>

            <li className={linkClass(200)}>
              <a href="#workflow" className="hover:text-yellow-400">Workflow</a>
            </li>

            <li className={linkClass(300)}>
              <a href="#casestudies" className="hover:text-yellow-400">Case Studies</a>
            </li>
          </ul>
        </nav>

        {/* RIGHT */}
        <div></div>

      </div>
    </header>
  );
}

export default Navbar;