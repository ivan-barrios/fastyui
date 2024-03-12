"use client";
import { useState } from "react";
import ComponentType from "./ComponentType";
import Components from "./Components";

enum STEPS {
  TYPE = 0,
  COMPONENT = 1,
  CODE = 2,
}

const Functionality = () => {
  const [step, setStep] = useState(STEPS.TYPE);
  const [componentType, setComponentType] = useState("");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  return (
    <section className="max-w-[1440px] w-full pt-[50px] sectionPaddings">
      <div className="w-full flex flex-col items-center text-center">
        {step === STEPS.TYPE && (
          <ComponentType onNext={onNext} setComponentType={setComponentType} />
        )}
        {step === STEPS.COMPONENT && (
          <Components componentType={componentType} />
        )}
        {step === STEPS.CODE && <h1>CODE</h1>}
        <button
          onClick={() => onBack()}
          className={`button ${step === STEPS.TYPE ? "hidden" : "mt-[50px]"}`}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default Functionality;
