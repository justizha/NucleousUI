import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BtnSize() {
  const SizesButtons = `
<button class="rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700">Small</button>
<button class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Default</button>
<button class="rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700">Large</button>`;

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
    <section className="mt-4" id="sizes_buttons">
      <h1 className="mb-3 text-4xl font-bold text-main-white">Sizes</h1>
      <p className="text-main-white/60">Different sizes of buttons</p>
      <div className="mb-4 mt-4 max-w-xl rounded-md border border-main-accent">
        <div className="mb-3 flex h-32 max-w-xl items-center justify-center gap-3">
          <button className="rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700">
            Small
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
            Default
          </button>
          <button className="rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700">
            Large
          </button>
        </div>
        <div className="text flex max-w-xl items-center justify-between bg-gray-600 p-1 text-base text-white">
          <p>Button - Default</p>
          <button
            type="button"
            onClick={() => copyCode(SizesButtons)}
            className="rounded bg-main-gray/40 p-2 text-sm duration-200"
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
          {SizesButtons}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
