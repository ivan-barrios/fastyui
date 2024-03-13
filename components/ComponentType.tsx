import components from "@/public/Components";

interface Params {
  onNext: () => void;
  setComponentType: (value: string) => void;
}

const ComponentType = ({ onNext, setComponentType }: Params) => {
  return (
    <div className="text-center flex flex-col items-center gap-12">
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex p-2 w-[50px] h-[50px] rounded-full bg-white white-shadow text-black justify-center items-center font-bold">
          1
        </div>
        <h2 className="text-white text-2xl lg:text-3xl  p-2 max-w-[900px]">
          Choose the type of the component you want
        </h2>
      </div>
      <div className="flex flex-wrap gap-[50px] justify-center">
        {components.map((component, index) => (
          <button
            key={index}
            className="cardBg w-[200px] hoverShadow"
            onClick={() => {
              setComponentType(component.id);
              onNext();
            }}
          >
            {component.id.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ComponentType;
