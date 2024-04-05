const components = [
  {
    id: "button",
    elements: [
      {
        functionalCode: (
          <button className="px-6 py-3 rounded-[5px] transition-all duration-200 ease-in-out w-[200px] bg-[#1e266e] font-bold hover:scale-105">
            BUTTON
          </button>
        ),
        code: `
        <button className="px-6 py-3 rounded-[5px] transition-all duration-200 ease-in-out w-[200px] bg-[#1e266e] font-bold hover:scale-105">
            BUTTON
        </button>
          `,
      },
      {
        functionalCode: (
          <button className="w-[200px] bg-gradient-to-r from-[#FDF982] to-[#ffd60c] text-[#030B27] font-bold py-3 px-4 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out">
            BUTTON
          </button>
        ),
        code: `
        <button className="w-[200px] bg-gradient-to-r from-[#FDF982] to-[#ffd60c] text-[#030B27] font-bold py-3 px-4 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out">
          BUTTON
        </button>`,
      },
      {
        functionalCode: (
          <button className="bg-white w-[200px] text-black rounded-[15px] px-6 py-3 uppercase text-lg font-semibold shadow-[#dddddd] shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            BUTTON
          </button>
        ),
        code: `
        <button className="bg-white w-[200px] text-black rounded-[15px] px-6 py-3 uppercase text-lg font-semibold shadow-[#dddddd] shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          BUTTON
        </button>`,
      },
    ],
  },
  {
    id: "card",
    elements: [
      {
        functionalCode: (
          <div className="w-full min-h-[500px] rounded-[50px] bg-[#c4c4c403] px-[20px] md:px-[25px] pt-[50px] flex gap-4 flex-col justify-start items-center  shadow-inner shadow-white max-w-[380px]">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1 rounded-full w-[50px] h-[50px] flex justify-center items-center">
                {/* <Image
              src={profilePicture}
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full object-cover w-[40px] h-[40px]"
            /> */}
              </div>
              <h3 className="font-bold text-xl">Name Surname</h3>
            </div>
            <p className="text-center pb-4">
              &quot;They are a great team, very responsible, dedicated, planning
              each step, adjusting the strategy in relation to each of the
              objectives we set. It has allowed me to position myself very well
              in the real estate market of the city of La Plata.&quot;
            </p>
          </div>
        ),
        code: `<div className="w-full min-h-[500px] rounded-[50px] bg-[#c4c4c403] px-[20px] md:px-[25px] pt-[50px] flex gap-4 flex-col justify-start items-center  shadow-inner shadow-white max-w-[380px]">
        <div className="flex items-center gap-4">
          <div className="bg-white p-1 rounded-full w-[50px] h-[50px] flex justify-center items-center">
            <Image
          src={profilePicture}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full object-cover w-[40px] h-[40px]"
        />
          </div>
          <h3 className="font-bold text-xl">Name Surname</h3>
        </div>
        <p className="text-center pb-4">
          &quot;They are a great team, very responsible, dedicated, planning
          each step, adjusting the strategy in relation to each of the
          objectives we set. It has allowed me to position myself very well
          in the real estate market of the city of La Plata.&quot;
        </p>
      </div>`,
      },
      {
        functionalCode: (
          <div className=" flex justify-center pt-[50px]">
            <div className="bg-[#030B27] relative flex flex-col items-center min-h-[300px] px-[25px] rounded-[32px] max-w-[700px]">
              <div className="w-[100px] h-[100px] bg-white rounded-full absolute -top-[50px]" />
              {/* <Image
                        src={testimonial.img}
                        alt={testimonial.nombre}
                        width={100}
                        height={100}
                        className="object-cover object-top z-30 rounded-full absolute -top-[50px] max-h-[100px] max-w-[100px]"
                      /> */}
              <p className="text-white pt-[75px] pb-[75px]">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vel egestas dolor, nec dignissim metus. Donec augue elit,
                rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
                libero sed pharetra.&quot;
              </p>
              <h3 className="text-center text-primary font-bold text-xl absolute bottom-[25px]">
                Name Surname
              </h3>
            </div>
          </div>
        ),
        code: `<div className=" flex justify-center pt-[50px]">
        <div className="bg-[#030B27] relative flex flex-col items-center min-h-[300px] px-[25px] rounded-[32px] max-w-[700px]">
          <Image
            src={yourImage}
            alt={yourAlt}
            width={100}
            height={100}
            className="object-cover object-top z-30 rounded-full absolute -top-[50px] max-h-[100px] max-w-[100px]"
          />
          <p className="text-white pt-[75px] pb-[75px]">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec vel egestas dolor, nec dignissim metus. Donec augue elit,
            rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum
            libero sed pharetra.&quot;
          </p>
          <h3 className="text-center text-primary font-bold text-xl absolute bottom-[25px]">
            Name Surname
          </h3>
        </div>
      </div>`,
      },
      {
        functionalCode: (
          <div className="bg-[#030B27] relative flex flex-col items-center gap-6 px-[25px] sm:px-[50px] rounded-[32px] max-w-[800px] text-white py-[40px] w-full">
            <h3 className="font-semibold text-2xl sm:text-[32px] ">
              ¡Lorem ipsum dolor sit amet!
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
              sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
              pharetra
            </p>
            <button
              href="#"
              target="_blank"
              className="w-[200px] bg-gradient-to-r from-[#FDF982] to-[#ffd60c] text-[#030B27] font-bold py-3 px-4 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <p>Lorem ipsum dolor</p>
            </button>
          </div>
        ),
        code: `<div className="bg-[#030B27] relative flex flex-col items-center gap-6 px-[25px] sm:px-[50px] rounded-[32px] max-w-[800px] text-white py-[40px] w-full">
        <h3 className="font-semibold text-2xl sm:text-[32px] ">
          ¡Lorem ipsum dolor sit amet!
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
          sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
          pharetra
        </p>
        <button
          href="#"
          target="_blank"
          className="w-[200px] bg-gradient-to-r from-[#FDF982] to-[#ffd60c] text-[#030B27] font-bold py-3 px-4 rounded-[100px] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p>Lorem ipsum dolor</p>
        </button>
      </div>`,
      },
    ],
  },
  {
    id: "text",
    elements: [
      {
        functionalCode: (
          <h1 className="bg-gradient-to-br from-[#61ffb0] from-30% to-transparent to-100% bg-clip-text text-transparent text-3xl p-2">
            Your title
          </h1>
        ),
        code: `<h1 className="bg-gradient-to-br from-[#61ffb0] from-30% to-transparent to-100% bg-clip-text text-transparent text-3xl p-2">
                Your title
              </h1>`,
      },
      {
        functionalCode: (
          <h2 className="uppercase drop-shadow-[0px_4px_7px_#FFF] sm:drop-shadow-[0px_4px_20px_#FFF] font-bold text-lg sm:text-2xl text-center lg:text-start">
            Your text
          </h2>
        ),
        code: `<h2 className="uppercase drop-shadow-[0px_4px_7px_#FFF] sm:drop-shadow-[0px_4px_20px_#FFF] font-bold text-lg sm:text-2xl text-center lg:text-start">
        Your text
      </h2>`,
      },
    ],
  },
];

export default components;
