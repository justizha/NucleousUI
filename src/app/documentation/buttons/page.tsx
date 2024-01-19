"use client"
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import DocsSection from "../../../components/DocsSection";



export default function Buttons() {

    const codeString =
    `
<button class='rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700'>Button</button>
<button class='rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700'>Button</button>
<button class='rounded-lg bg-yellow-600 px-4 py-2 font-medium text-white hover:bg-yellow-700'>Button</button>
    `
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
        <DocsSection>
            <p className="text-main-blue/50 text-lg font-medium">
                Base Components
            </p>
            <h1 className="text-white text-4xl font-semibold mb-3">
                Buttons
            </h1>
            <p className="text-main-white/60 text-base">
                Collections of Buttons for actions in forms , dialogs and more.
            </p>
            <hr className="my-8 border-main-gray" />
            <h1 className="text-4xl font-bold text-main-white mb-3">
                Types
            </h1>
            <p className="text-main-white/60">
                Standard Buttons
            </p>
            <div className="border rounded-md max-w-xl border-main-gray mt-4 mb-4">
                <div className="max-w-xl mb-3 h-52 flex justify-center items-center gap-3">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">Button</button>
                    <button className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">Button</button>
                    <button className="rounded-lg bg-yellow-600 px-4 py-2 font-medium text-white hover:bg-yellow-700">Button</button>
                </div>
                <div className='flex justify-between p-1  bg-gray-600 text-white text text-base max-w-xl'>
                    <p>Button - Default</p>
                    <button onClick={() => copyCode(codeString)} className='p-1 duration-200 bg-main-gray rounded text-sm'>
                        {isCopied ? 'Copied !' : 'Copy'}
                    </button>
                </div>
                <SyntaxHighlighter
                    language='htmlbars'
                    style={atomOneDark}
                    wrapLongLines={false}
                    className="overflow-y-auto h-32 max-w-xl text-sm text-start"
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </DocsSection>
    )
}