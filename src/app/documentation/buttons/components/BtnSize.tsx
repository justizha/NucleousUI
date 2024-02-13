import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";


export default function BtnSize() {
    const SizesButtons =
        `
<button className="rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700">Small</button>
<button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Default</button>
<button className="rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700">Large</button>`


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
        <section className="mt-4" id="sizes_buttons">
            <h1 className="text-4xl font-bold text-main-white mb-3">
                Sizes
            </h1>
            <p className="text-main-white/60">
                Different sizes of buttons
            </p>
            <div className="border rounded-md max-w-xl border-main-accent mt-4 mb-4">
                <div className="max-w-xl mb-3 h-32 flex justify-center items-center gap-3">
                    <button className="rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700">Small</button>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Default</button>
                    <button className="rounded-lg bg-blue-600 px-6 py-4 font-medium text-white hover:bg-blue-700">Large</button>
                </div>
                <div className='flex justify-between p-1 bg-gray-600 text-white items-center text text-base max-w-xl'>
                    <p>Button - Default</p>
                    <button onClick={() => copyCode(SizesButtons)} className='p-2 duration-200 bg-main-gray/40 rounded text-sm'>
                        {isCopied ? 'Copied !' : 'Copy'}
                    </button>
                </div>
                <SyntaxHighlighter
                    language='htmlbars'
                    style={atomOneDark}
                    wrapLongLines={false}
                    className="overflow-y-auto h-32 max-w-xl text-sm text-start"
                >
                    {SizesButtons}
                </SyntaxHighlighter>
            </div>
        </section>
    )
}