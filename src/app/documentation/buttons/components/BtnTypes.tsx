import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function BtnTypes() {
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
    const DefaultBtns =
        `
<button class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Button</button>
<button class="rounded-lg border border-gray-300 px-4 py-2 font-medium text-white hover:border-blue-600 hover:text-blue-600">Button</button>
<button class="rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-500/40">Button</button>
`
    return (
        <section className="mt-2" id="types_buttons">
            <p className="text-main-blue/80 text-lg font-bold mb-2">
                Base Components
            </p>
            <h1 className="text-white text-4xl font-semibold mb-3">
                Buttons
            </h1>
            <p className="text-main-white/60 text-base">
                Collections of Buttons for actions in forms , dialogs and more.
            </p>
            <div className="py-6" />
            <h1 className="text-4xl font-bold text-main-white mb-3">
                Types
            </h1>
            <p className="text-main-white/60">
                Different Types Buttons
            </p>
            <div className="border rounded-md max-w-xl border-main-accent mt-4 mb-4">
                <div className="max-w-xl mb-3 h-32 flex justify-center items-center gap-3">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Button</button>
                    <button className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-white hover:border-blue-600 hover:text-blue-600">Button</button>
                    <button className="rounded-lg px-4 py-2 font-medium text-white hover:bg-blue-500/40">Button</button>
                </div>
                <div className='flex justify-between p-1 bg-gray-600 text-white items-center text text-base max-w-xl'>
                    <p>Button - Default</p>
                    <button onClick={() => copyCode(DefaultBtns)} className='p-2 duration-200 bg-main-gray/40 rounded text-sm'>
                        {isCopied ? 'Copied !' : 'Copy'}
                    </button>
                </div>
                <SyntaxHighlighter
                    language='htmlbars'
                    style={atomOneDark}
                    wrapLongLines={false}
                    className="overflow-y-auto h-32 max-w-xl text-sm text-start"
                >
                    {DefaultBtns}
                </SyntaxHighlighter>
            </div>
        </section>
    )
}