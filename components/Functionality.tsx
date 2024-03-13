"use client";
import { useState } from "react";
import ComponentType from "./ComponentType";
import Components from "./Components";
import ComponentCode from "./ComponentCode";

enum STEPS {
  TYPE = 0,
  COMPONENT = 1,
  CODE = 2,
}

const Functionality = () => {
  const [step, setStep] = useState(STEPS.TYPE);
  const [componentType, setComponentType] = useState("");
  const [componentCode, setComponentCode] = useState("");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  return (
    <section className="max-w-[1440px] w-full pt-[50px] sectionPaddings min-h-[500px]">
      <div className="w-full flex flex-col items-center text-center">
        {step === STEPS.TYPE && (
          <ComponentType onNext={onNext} setComponentType={setComponentType} />
        )}
        {step === STEPS.COMPONENT && (
          <Components
            onNext={onNext}
            componentType={componentType}
            setComponentCode={setComponentCode}
          />
        )}
        {step === STEPS.CODE && <ComponentCode componentCode={componentCode} />}
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
