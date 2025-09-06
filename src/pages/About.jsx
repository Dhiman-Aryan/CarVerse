// pages/About.js
import React, { useEffect } from "react";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            About CarVerse
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Redefining excellence in the automotive industry since 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-16 border border-gray-700">
          {/* Hero Image with Overlay */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="AutoElite Showroom"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Founded in 2025, CarVerse has been providing premium vehicles
                  to discerning customers for over a decade. What started as a
                  college project has grown into one of the most trusted
                  names in the automotive industry.
                </p>
              </div>
              <div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Our mission is simple: to help you find the perfect vehicle
                  that matches your lifestyle, needs, and budget. We believe
                  that buying a car should be an exciting and hassle-free
                  experience.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Why Choose Carverse
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Quality Assurance
                      </h3>
                      <p className="text-gray-400">
                        Every vehicle undergoes a rigorous 150-point inspection
                        by our certified technicians.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Best Value
                      </h3>
                      <p className="text-gray-400">
                        We offer competitive pricing and various financing
                        options tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        24/7 Support
                      </h3>
                      <p className="text-gray-400">
                        Our dedicated team is always ready to assist you with
                        any questions or concerns.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Warranty Included
                      </h3>
                      <p className="text-gray-400">
                        All vehicles come with a comprehensive warranty package
                        for your peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Our Team
              </h2>
              <p className="text-gray-300 mb-12 text-lg text-center max-w-3xl mx-auto">
                Our team of automotive experts is passionate about cars and
                dedicated to providing exceptional customer service. With
                decades of combined experience, we have the knowledge and
                expertise to help you make the right choice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-600">
                    <img
                      src="/src/assets/images/Aryan.png"
                      alt="Team Member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    Aryan Dhiman
                  </h3>
                  <p className="text-blue-400 font-medium">MERN Stack Developer</p>
                  <p className="text-gray-400 mt-3">
                    With over 2 years of experience in Full stack development and MERN stack expert.
                  </p>
                </div>

                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-600">
                    <img
                      src=""
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    ________
                  </h3>
                  <p className="text-blue-400 font-medium">--------</p>
                  <p className="text-gray-400 mt-3">
                    .....
                  </p>
                </div>

                <div className="text-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden border-4 border-gray-600">
                    <img
                      src=""
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    ________
                  </h3>
                  <p className="text-blue-400 font-medium">--------</p>
                  <p className="text-gray-400 mt-3">
                   .....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
