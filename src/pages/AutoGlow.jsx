import { Link } from "react-router-dom";
import { useState } from "react";

function AutoGlow() {
  const [selectedService, setSelectedService] = useState("Ceramic Coating");
  const [selected, setSelected] = useState("silver");

  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const services = [
    {
      title: "Express Detail",
      price: "$99",
      ceramic: false,
      description: "Quick refresh for busy schedules."
    },
    {
      title: "Full Detail",
      price: "$199",
      ceramic: false,
      description: "Interior and exterior restoration."
    },
    {
      title: "Paint Correction",
      price: "$299",
      ceramic: false,
      description: "Remove swirls and restore gloss."
    },
    {
      title: "Ceramic Coating",
      price: "$499+",
      ceramic: true,
      description: "Long-term paint protection."
    },
    {
      title: "Correction + Coating",
      price: "$699+",
      ceramic: true,
      description: "Maximum gloss and protection."
    },
    {
      title: "Interior Deep Clean",
      price: "$149",
      ceramic: false,
      description: "Full interior shampoo, steam clean, and odor removal."
    }
  ];

  const selectedServiceObj = services.find(
    (s) => s.title === selectedService
  );

  const canUseCeramic = selectedServiceObj?.ceramic;

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="border-b border-yellow-500/20 backdrop-blur-md sticky top-0 z-50 bg-[#0f0f0f]/90">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-yellow-400">
            AutoGlow
          </h1>

          <div className="flex gap-8 text-sm uppercase tracking-wider">

            <a
              href="#services"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Services
            </a>

            <a
              href="#coating"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Ceramic Coating
            </a>

            <a
              href="#booking"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Book Now
            </a>

            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Portfolio
            </Link>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h1 className="text-6xl font-bold leading-tight">
              Luxury Car
              <span className="text-yellow-400"> Detailing</span>
              <br />
              Reimagined
            </h1>

            <p className="text-gray-400 text-xl mt-8">
              Premium detailing, ceramic coatings,
              paint protection and showroom finishes.
            </p>

            <a
              href="#services"
              className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold"
            >
              Request Service
            </a>

          </div>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-[#161616]">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-yellow-400 mb-16">
            Select A Service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Express Detail",
                price: "$99",
                ceramic: false,
                description: "Quick refresh for busy schedules."
              },
              {
                title: "Interior Deep Clean",
                price: "$149",
                ceramic: false,
                description: "Full interior shampoo, steam clean, and odor removal."
              },
              {
                title: "Full Detail",
                price: "$199",
                ceramic: false,
                description: "Interior and exterior restoration."
              },
              {
                title: "Paint Correction",
                price: "$299",
                ceramic: false,
                description: "Remove swirls and restore gloss."
              },
              {
                title: "Ceramic Coating",
                price: "$499+",
                ceramic: true,
                description: "Long-term paint protection."
              },
              {
                title: "Correction + Coating",
                price: "$699+",
                ceramic: true,
                description: "Maximum gloss and protection."
              }
            ].map((service) => (

              <div
                key={service.title}
                onClick={() => setSelectedService(service.title)}
                className={`
                  cursor-pointer
                  bg-[#202020]
                  rounded-3xl
                  p-8
                  transition-all duration-300

                  hover:scale-[1.03]

                  ${
                    selectedService === service.title
                      ? "ring-2 ring-yellow-400"
                      : ""
                  }
                `}
              >

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>

                <p className="text-yellow-400 mt-6 text-3xl font-bold">
                  {service.price}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CERAMIC COATING */}
      <section id="coating" className="py-28 bg-[#0f0f0f] relative">
        <div className="relative"></div>
          <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">
              CHOOSE YOUR LEVEL OF COATING
            </h2>

            <div className={`grid md:grid-cols-3 gap-8 ${!canUseCeramic ? "pointer-events-none opacity-40" : ""}`}>

              {/* BRONZE */}
              <div
                onClick={() => setSelected("bronze")}
                className={`
                  cursor-pointer
                  bg-[#161616]
                  rounded-2xl
                  p-8
                  text-center
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl
                  ${selected === "bronze"
                    ? "ring-2 ring-yellow-400 shadow-yellow-400/20"
                    : "shadow-none"
                  }
                `}
              >
                <h3 className="text-xl font-semibold text-white">BRONZE</h3>
                <p className="text-gray-400 mt-1">1 YEAR PROTECTION</p>

                <p className="text-4xl font-bold text-yellow-400 mt-6">$499</p>

                <ul className="mt-8 space-y-3 text-gray-300 text-sm">
                  <li>✔ Hydrophobic Protection</li>
                  <li>✔ UV Resistance</li>
                  <li>✔ Chemical Resistance</li>
                  <li>— Scratch Resistance</li>
                  <li>— Gloss Enhancement</li>
                  <li>— Wheel Coating</li>
                  <li>— Glass Coating</li>
                  <li>— Paint Correction</li>
                </ul>

                <button className="mt-10 w-full py-3 rounded-xl border border-white/20 text-white hover:bg-yellow-400 hover:text-black transition">
                  Learn More
                </button>
              </div>

              {/* SILVER (DEFAULT SELECTED) */}
              <div
                onClick={() => setSelected("silver")}
                className={`
                  cursor-pointer
                  bg-[#161616]
                  rounded-2xl
                  p-8
                  text-center
                  transition-all duration-300
                  hover:scale-[1.05]
                  hover:shadow-2xl
                  relative
                  ${selected === "silver"
                    ? "ring-2 ring-yellow-400 shadow-yellow-400/30 scale-105"
                    : ""
                  }
                `}
              >

                <span className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>

                <h3 className="text-xl font-semibold text-white mt-4">SILVER</h3>
                <p className="text-gray-400 mt-1">3 YEAR PROTECTION</p>

                <p className="text-4xl font-bold text-yellow-400 mt-6">$699</p>

                <ul className="mt-8 space-y-3 text-gray-300 text-sm">
                  <li>✔ Hydrophobic Protection</li>
                  <li>✔ UV Resistance</li>
                  <li>✔ Chemical Resistance</li>
                  <li>✔ Scratch Resistance</li>
                  <li>✔ Gloss Enhancement</li>
                  <li>✔ Wheel Coating</li>
                  <li>— Glass Coating</li>
                  <li>— Paint Correction</li>
                </ul>

                <button className="mt-10 w-full py-3 rounded-xl border border-white/20 text-white hover:bg-yellow-400 hover:text-black transition">
                  Learn More
                </button>
              </div>

              {/* GOLD */}
              <div
                onClick={() => setSelected("gold")}
                className={`
                  cursor-pointer
                  bg-[#161616]
                  rounded-2xl
                  p-8
                  text-center
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl
                  ${selected === "gold"
                    ? "ring-2 ring-yellow-400 shadow-yellow-400/20"
                    : ""
                  }
                `}
              >
                <h3 className="text-xl font-semibold text-white">GOLD</h3>
                <p className="text-gray-400 mt-1">5 YEAR PROTECTION</p>

                <p className="text-4xl font-bold text-yellow-400 mt-6">$999</p>

                <ul className="mt-8 space-y-3 text-gray-300 text-sm">
                  <li>✔ Hydrophobic Protection</li>
                  <li>✔ UV Resistance</li>
                  <li>✔ Chemical Resistance</li>
                  <li>✔ Scratch Resistance</li>
                  <li>✔ Gloss Enhancement</li>
                  <li>✔ Wheel Coating</li>
                  <li>✔ Glass Coating</li>
                  <li>✔ Paint Correction</li>
                </ul>

                <button className="mt-10 w-full py-3 rounded-xl border border-white/20 text-white hover:bg-yellow-400 hover:text-black transition">
                  Learn More
                </button>
              </div>

            </div>
          </div>
          {/* DISABLED OVERLAY */}
        {!canUseCeramic && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center rounded-2xl">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                Ceramic Coating Unavailable
              </h3>
              <p className="text-gray-300">
                Please select a service that includes ceramic coating
                to select a level of Coating.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* BOOKING */}
      <section
        id="booking"
        className="py-24 bg-[#161616]"
      >
        <div className="max-w-5xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-white mb-6">
            Book Your Detail
          </h2>

          <p className="text-center text-gray-400 mb-14">
            Choose your preferred date and time.
          </p>

          {/* Progress */}
          <div className="flex justify-center items-center gap-6 mb-12">

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-sm mt-2 text-gray-300">
                Service
              </span>
            </div>

            <div className="w-24 h-[2px] bg-yellow-400"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center">
                2
              </div>
              <span className="text-sm mt-2 text-gray-300">
                Date & Time
              </span>
            </div>

            <div className="w-24 h-[2px] bg-white/20"></div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border border-white/20 text-gray-500 flex items-center justify-center">
                3
              </div>
              <span className="text-sm mt-2 text-gray-500">
                Confirm
              </span>
            </div>

          </div>

          <div className="bg-[#202020] rounded-3xl p-10">

            {/* Month */}
            <h3 className="text-center text-2xl font-semibold mb-10">
              June 2026
            </h3>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-3 text-center mb-12">

              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <div
                  key={day}
                  className="text-gray-500 text-sm font-semibold"
                >
                  {day}
                </div>
              ))}

              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,
              15,16,17,18,19,20,21,22,23,24,
              25,26,27,28,29,30].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`
                    h-12
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      selectedDate === date
                        ? "bg-yellow-400 text-black font-bold"
                        : "bg-[#161616] hover:bg-yellow-400 hover:text-black"
                    }
                  `}
                >
                  {date}
                </button>
              ))}

            </div>

            {/* Times */}
            <h4 className="text-xl font-semibold mb-6">
              Available Times
            </h4>

            <div className="grid md:grid-cols-3 gap-4">

              {[
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
                "2:00 PM",
                "3:00 PM",
                "4:00 PM",
                "5:00 PM"
              ].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-4
                    rounded-xl
                    transition-all
                    duration-200

                    ${
                      selectedTime === time
                        ? "bg-yellow-400 text-black font-bold"
                        : "bg-[#161616] hover:bg-yellow-400 hover:text-black"
                    }
                  `}
                >
                  {time}
                </button>
              ))}

            </div>

            {/* Customer Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <input
                placeholder="Full Name"
                className="
                  bg-[#161616]
                  p-4
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-yellow-400
                "
              />

              <input
                placeholder="Email Address"
                className="
                  bg-[#161616]
                  p-4
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-yellow-400
                "
              />

              <input
                placeholder="Phone Number"
                className="
                  bg-[#161616]
                  p-4
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-yellow-400
                "
              />

              <input
                placeholder="Vehicle"
                className="
                  bg-[#161616]
                  p-4
                  rounded-xl
                  outline-none
                  border border-transparent
                  focus:border-yellow-400
                "
              />

            </div>

            {/* Button */}
            <button
            onClick={() => setShowConfirmation(true)}
            className="
              mt-10
              w-full
              bg-yellow-400
              text-black
              py-4
              rounded-xl
              font-bold
              hover:bg-yellow-300
              transition-all
            "
          >
            Continue Booking
          </button>

          </div>

        </div>
      </section>
      
      {/* CONFIRMATION MODAL */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] px-4">

          <div className="bg-[#161616] rounded-3xl p-10 max-w-xl w-full border border-yellow-500/20 shadow-2xl">

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-5xl font-bold text-white">
                ✓
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl font-bold text-center mb-3">
              Booking Confirmed
            </h2>

            <p className="text-center text-gray-400 mb-8">
              Thank you for choosing AutoGlow.
              Your appointment request has been received.
            </p>

            {/* Details */}
            <div className="bg-[#202020] rounded-2xl p-6 space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">Package</span>
                <span className="text-yellow-400 font-semibold">
                  {selectedService}
                  {(
                    selectedService === "Ceramic Coating" ||
                    selectedService === "Correction + Coating"
                  ) && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">
                        Protection
                      </span>

                      <span className="text-yellow-400 uppercase">
                        {selected}
                      </span>
                    </div>
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="text-white">
                  June {selectedDate}, 2026
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Time</span>
                <span className="text-white">
                  {selectedTime}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Location</span>
                <span className="text-white">
                  AutoGlow Studio
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Duration</span>
                <span className="text-white">
                  4 Hours
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Confirmation #</span>
                <span className="text-yellow-400 font-semibold">
                  AG-8240608
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3">

              <button
                className="
                  bg-yellow-400
                  text-black
                  py-4
                  rounded-xl
                  font-bold
                  hover:bg-yellow-300
                  transition
                "
              >
                Add To Calendar
              </button>

              <button
                onClick={() => setShowConfirmation(false)}
                className="
                  border
                  border-white/20
                  py-4
                  rounded-xl
                  hover:border-yellow-400
                  hover:text-yellow-400
                  transition
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        Designed by Daniel Zhu • AutoGlow Detailing
      </footer>

    </div>
  );
}

export default AutoGlow;