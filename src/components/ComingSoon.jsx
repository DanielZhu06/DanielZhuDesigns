function ComingSoon() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-[#0d0d0d] font-[Poppins] text-white">

      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#2b2b2b_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6">

        <h1 className="text-5xl md:text-6xl font-bold text-[#f8c400]">
          Coming Soon
        </h1>

        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          This project is currently in development.
        </p>

        <a
          href="/"
          className="
            inline-block
            mt-6
            px-6
            py-3
            border
            border-[#f8c400]
            text-[#f8c400]
            rounded-xl
            transition
            hover:bg-[#f8c400]
            hover:text-black
          "
        >
          Back to Portfolio
        </a>

      </div>

    </div>
  );
}

export default ComingSoon;