import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 w-full mt-[150px] border-t-[2px] border-t-white text-center">
      <div className="flex flex-col items-center gap-8 w-full max-w-[1440px] pt-[50px] sectionPaddings">
        <h3 className="title-gradient text-3xl">FastyUI</h3>
        <p className="text-lg">
          Effortlessly implementable and quick to integrate.
        </p>
        <p className="text-lg font-bold">By: El tiburon del mal</p>
        <div className="h-[2px] w-full bg-white" />
        <p className="pb-8">Copyright © 2024 FastyUI</p>
      </div>
    </footer>
  );
};

export default Footer;
