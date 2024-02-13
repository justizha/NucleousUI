import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const ColorBtn =
    `
  <button class="rounded-lg bg-white px-4 py-2 font-medium">Button</button>
  <button class="rounded-lg bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600">Button</button>
  <button class="rounded-lg bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">Button</button>
  <button class="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">Button</button>
  <button class="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600">Button</button>
`
export default function BtnColors() {
    const [isCopied, setIsCopied] = useState(false)
    const copyCode = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("copied")
            setIsCopied(true)
        },
            (error) => {
                console.log("error", error)
            })
    }
    return (
        <section className="mt-4" id="colors_buttons">
            <h1 className="text-4xl font-bold text-main-white mb-3">
                Colors
            </h1>
            <p className="text-main-white/60">
                Different colors of buttons
            </p>
            <div className="border rounded-md max-w-xl border-main-accent mt-4 mb-4">
                <div className="max-w-xl mb-3 h-32 flex justify-center items-center gap-3">
                    <button className="rounded-lg bg-white px-4 py-2 font-medium">Button</button>
                    <button className="rounded-lg bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600">Button</button>
                    <button className="rounded-lg bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">Button</button>
                    <button className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">Button</button>
                    <button className="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600">Button</button>
                </div>
                <div className='flex justify-between py-2 px-1 bg-gray-600 text-white items-center text text-base max-w-xl'>
                    <p>Button - Default</p>
                    <button onClick={() => copyCode(ColorBtn)} className='py-1 px-2 duration-200 bg-main-gray/40 rounded text-sm'>
                        {isCopied ? 'Copied !' : 'Copy'}
                    </button>
                </div>
                <SyntaxHighlighter
                    language='htmlbars'
                    style={atomOneDark}
                    wrapLongLines={false}
                    className="overflow-y-auto h-32 max-w-xl text-sm text-start"
                >
                    {ColorBtn}
                </SyntaxHighlighter>
            </div>
        </section>
    )
}