export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-black to-gray-900 min-h-[120vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
        <div className="text-center mb-24">
          <h2 className="text-6xl sm:text-7xl font-extrabold text-white mb-8 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-move">
              Supreme Group
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto font-light text-center">
            We are a leading automotive technology company dedicated to
            revolutionizing the industry through innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          {/* Left Column - Timeline/Stepper for Mission, Vision, Stats */}
          <div className="flex flex-col gap-16 justify-center">
            {/* Timeline/Stepper */}
            <div className="relative flex flex-col gap-12 pl-8">
              {/* Vertical line */}
              <div
                className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/40 to-purple-500/40 rounded-full"
                style={{ zIndex: 0 }}
              ></div>
              {/* Mission */}
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-xl w-full">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Our Mission
                  </h3>
                  <p className="text-xl text-gray-200 font-light">
                    To deliver cutting-edge automotive solutions that enhance
                    performance, safety, and sustainability while pushing the
                    boundaries of what&apos;s possible in the industry.
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 shadow-xl w-full">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Our Vision
                  </h3>
                  <p className="text-xl text-gray-200 font-light">
                    To be the global leader in automotive innovation, setting
                    new standards for excellence and driving the future of
                    transportation technology.
                  </p>
                </div>
              </div>
            </div>
            {/* Stats Row */}
            <div className="flex flex-row gap-8 mt-4">
              <div className="flex-1 text-center p-8 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl border border-blue-500/40 shadow-xl flex flex-col items-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-extrabold text-blue-400 mb-1">
                  15+
                </div>
                <div className="text-lg text-gray-200">Years Experience</div>
              </div>
              <div className="flex-1 text-center p-8 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl border border-purple-500/40 shadow-xl flex flex-col items-center">
                <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                    />
                  </svg>
                </div>
                <div className="text-4xl font-extrabold text-purple-400 mb-1">
                  500+
                </div>
                <div className="text-lg text-gray-200">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Column - Large Glass Video Card */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="relative rounded-3xl shadow-2xl bg-white/10 backdrop-blur-2xl border-8 border-white/10 flex items-center justify-center"
              style={{
                width: 420,
                height: 420,
                boxShadow: "0 12px 48px 0 rgba(0,0,0,0.7)",
              }}
            >
              <video
                className="rounded-2xl object-cover w-[380px] h-[380px] shadow-xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/Supreme Group assets/Commercial Alpha.92c92d40f9116c837d1d.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              {/* Floating Glass Stat */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl flex flex-col items-center min-w-[200px]">
                <div className="text-3xl font-bold text-white mb-1">
                  Innovation
                </div>
                <div className="text-lg text-gray-200">At the Core</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center p-12 bg-gradient-to-br from-blue-600/20 to-transparent rounded-3xl border border-blue-500/30 shadow-xl flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Innovation</h3>
            <p className="text-xl text-gray-200 font-light">
              Constantly pushing boundaries and exploring new technologies to
              deliver exceptional results.
            </p>
          </div>
          <div className="text-center p-12 bg-gradient-to-br from-purple-600/20 to-transparent rounded-3xl border border-purple-500/30 shadow-xl flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Quality</h3>
            <p className="text-xl text-gray-200 font-light">
              Maintaining the highest standards of quality in every project and
              product we deliver.
            </p>
          </div>
          <div className="text-center p-12 bg-gradient-to-br from-green-600/20 to-transparent rounded-3xl border border-green-500/30 shadow-xl flex flex-col items-center">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">Excellence</h3>
            <p className="text-xl text-gray-200 font-light">
              Striving for excellence in everything we do, from concept to
              completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
