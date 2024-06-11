import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BtnTypes() {
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
  const DefaultBtn = `
<button class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Button</button>
<button class="rounded-lg border border-gray-300 px-4 py-2 font-medium text-white hover:border-blue-600 hover:text-blue-600">Button</button>
<button class="rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-500/40">Button</button>
`;
  return (
    <section className="mt-2" id="types_buttons">
      <p className="mb-2 text-lg font-bold text-main-blue/80">
        Base Components
      </p>
      <h1 className="mb-3 text-4xl font-semibold text-white">Buttons</h1>
      <p className="text-base text-main-white/60">
        Collections of Buttons for actions in forms , dialogs and more.
      </p>
      <div className="py-6" />
      <h1 className="mb-3 text-4xl font-bold text-main-white">Types</h1>
      <p className="text-main-white/60">Different Types Buttons</p>
      <div className="mb-4 mt-4 max-w-xl rounded-md border border-main-accent">
        <div className="mb-3 flex h-32 max-w-xl items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Button
          </button>
          <button
            type="button"
            className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-white hover:border-blue-600 hover:text-blue-600"
          >
            Button
          </button>
          <button
            type="button"
            className="rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-500/40"
          >
            Button
          </button>
        </div>
        <div className="text flex max-w-xl items-center justify-between bg-gray-600 p-1 text-base text-white">
          <p>Button - Default</p>
          <button
            type="button"
            onClick={() => copyCode(DefaultBtn)}
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
          {DefaultBtn}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
