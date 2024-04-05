import components from "@/public/Components";

interface Params {
  componentType: string;
  onNext: () => void;
  setComponentCode: (value: string) => void;
}

const Components = ({ componentType, onNext, setComponentCode }: Params) => {
  const field = componentType.toLowerCase();
  const selected = components.find((component) => component.id === field);

  return (
    <div className="text-center flex flex-col items-center gap-12">
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex p-2 w-[50px] h-[50px] rounded-full bg-white white-shadow text-black justify-center items-center font-bold">
          2
        </div>
        <h2 className="text-white text-2xl lg:text-3xl  p-2 max-w-[900px]">
          Choose the component you want
        </h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {selected?.elements.map((element) => (
          <button
            onClick={() => {
              setComponentCode(element.code);
              onNext();
            }}
          >
            {element.functionalCode}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Components;
