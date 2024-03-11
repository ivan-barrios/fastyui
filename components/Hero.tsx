const Hero = () => {
  return (
    <section className="max-w-[1440px] w-full pt-[50px] sectionPaddings">
      <div className="w-full flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="title-gradient text-3xl sm:text-4xl lg:text-5xl p-2 max-w-[800px]">
            Speed up development with ready-made Next.js components
          </h1>
          <div className="md:hidden">
            {steps.map((step, index) => (
              <div key={index} className="w-full">
                <div className="flex items-center gap-2">
                  <div className="p-2 min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] rounded-full bg-white text-black flex justify-center items-center font-bold">
                    {index + 1}
                  </div>
                  <p className="font-medium text-start">{step}</p>
                </div>
                <div
                  className={`w-[2px] h-[50px] bg-white ml-[25px] ${
                    index === 3 ? "hidden" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="hidden md:flex w-full justify-center md:gap-[50px] lg:gap-[100px]">
            {steps.map((step, index) => (
              <div key={index} className="flex justify-evenly">
                <div className="flex flex-col items-center gap-2 z-30 w-[150px]">
                  <div className="p-2 w-[50px] h-[50px] rounded-full bg-white text-black flex justify-center items-center font-bold">
                    {index + 1}
                  </div>
                  <p className="font-medium max-w-[150px]">{step}</p>
                </div>
                <div
                  className={`w-[250px] ml-[200px] h-[2px] bg-white mt-[25px] z-20 absolute ${
                    index === 3 ? "hidden" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const steps = [
  "Choose component type",
  "Select Component",
  "Copy code",
  "Enjoy",
];
