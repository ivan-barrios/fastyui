"use client";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

interface Params {
  componentCode: string;
}

const ComponentCode = ({ componentCode }: Params) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="text-center flex flex-col items-center gap-12">
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex p-2 w-[50px] h-[50px] rounded-full bg-white white-shadow text-black justify-center items-center font-bold">
          3
        </div>
        <h2 className="text-white text-2xl lg:text-3xl  p-2 max-w-[900px]">
          Copy & Paste in your project
        </h2>
      </div>
      <div className="max-w-[280px] sm:max-w-[500px] lg:max-w-[900px] w-full bg-[#3a404d] rounded-[15px] overflow-hidden white-shadow">
        <div className="flex justify-between px-4 py-2 text-white text-xs items-center">
          <p className="text-lg">Your Code</p>
          {copied ? (
            <button className="py-1 inline-flex items-center gap-1">
              <FaCheck className="text-lg" />
              Copied!
            </button>
          ) : (
            <button
              onClick={() => {
                navigator.clipboard.writeText(componentCode);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }}
              className="py-1 inline-flex items-center gap-1"
            >
              <FaCopy className="text-lg" />
              Copy code
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={atomOneDark}
          customStyle={{
            padding: "20px",
            textAlign: "left",
            overflowY: "scroll",
            maxHeight: "500px",
          }}
        >
          {componentCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ComponentCode;
