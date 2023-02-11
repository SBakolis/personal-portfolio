import Typewriter from "typewriter-effect";

function Welcome() {
  return (
    <>
      <section
        className="text-gray-400 bg-gray-900 body-font h-screen flex flex-col items-center justify-center"
        id="welcome"
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src="https://dummyimage.com/500x500"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="text-6xl mb-2">Hi, I'm Stamatis</h1>
            <div className=" text-2xl mb-5">
              <Typewriter
                className="title-font sm:text-4xl text-3xl mb-11 font-medium text-white"
                options={{
                  strings: [
                    "Frontend Developer",
                    "Software Engineer",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              />
            </div>

            <p className="leading-relaxed mb-8">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;
