import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const ColorBtn = `
  <button class="rounded-lg bg-white px-4 py-2 font-medium">Button</button>
  <button class="rounded-lg bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600">Button</button>
  <button class="rounded-lg bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">Button</button>
  <button class="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">Button</button>
  <button class="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600">Button</button>
`;
export default function BtnColors() {
  const [isCopied, setIsCopied] = useState(false);
  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        console.log("copied");
        setIsCopied(true);
      },
      (error) => {
        console.log("error", error);
      },
    );
  };
  return (
    <section className="mt-4" id="colors_buttons">
      <h1 className="mb-3 text-4xl font-bold text-main-white">Colors</h1>
      <p className="text-main-white/60">Different colors of buttons</p>
      <div className="mb-4 mt-4 max-w-xl rounded-md border border-main-accent">
        <div className="mb-3 flex h-32 max-w-xl items-center justify-center gap-3">
          <button className="rounded-lg bg-white px-4 py-2 font-medium">
            Button
          </button>
          <button className="rounded-lg bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600">
            Button
          </button>
          <button className="rounded-lg bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">
            Button
          </button>
          <button className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">
            Button
          </button>
          <button className="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600">
            Button
          </button>
        </div>
        <div className="text flex max-w-xl items-center justify-between bg-gray-600 px-1 py-2 text-base text-white">
          <p>Button - Default</p>
          <button
            type="button"
            onClick={() => copyCode(ColorBtn)}
            className="rounded bg-main-gray/40 px-2 py-1 text-sm duration-200"
          >
            {isCopied ? "Copied !" : "Copy"}
          </button>
        </div>
        <SyntaxHighlighter
          language="htmlbars"
          style={atomOneDark}
          wrapLongLines={false}
          className="h-32 max-w-xl overflow-y-auto text-start text-sm"
        >
          {ColorBtn}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
