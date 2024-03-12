const components = [
  {
    id: "section",
    elements: [
      {
        functionalCode: (
          <h1 className="font-bold text-4xl text-white">asasdadasada</h1>
        ),
        code: `
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
            <div className="flex flex-wrap gap-8">
              {selected?.elements.map((element) => (
                <SyntaxHighlighter language="tsx" style={atomOneDark}>
                  {element.code}
                </SyntaxHighlighter>
              ))}
            </div>
          );
        };
        
        export default Components;
        `,
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "input",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "navbar",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "button",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "card",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "dropdown",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
  {
    id: "text",
    elements: [
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section1</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section2</h1>",
      },
      {
        functionalCode: <h1 className="font-bold text-4xl text-white">asda</h1>,
        code: "<h1>section3</h1>",
      },
    ],
  },
];

export default components;
