import components from "@/public/Components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Params {
  componentType: string;
}

const Components = ({ componentType }: Params) => {
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
      <div className="flex flex-wrap gap-8">
        {selected?.elements.map((element) => element.functionalCode)}
      </div>
    </div>
  );
};

export default Components;

//For the code
// {selected?.elements.map((element) => (
//     <SyntaxHighlighter
//       language="tsx"
//       style={atomOneDark}
//       customStyle={{ padding: "25px" }}
//     >
//       {element.code}
//     </SyntaxHighlighter>
//   ))}
