import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeHighlight() {
    const codeString = `
    <div class='w-1/2 mx-auto'>
        <h1 class='text-5xl font-bold text-main-white'>
            Echoes of <br />
            the Silenced Wind
        </h1>
        <p class='text-main-white text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum repudiandae aspernatur, assumenda unde ab nemo 
        <div className='mt-3'>
            <button class='p-1 bg-main-white rounded-md text-black'>
                Get Started.
            </button>
        </div>
    </div>
    `
    const [setText] = useState('')
    const copyCode = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("copied")
        },
            (error) => {
                console.log("error", error)
            })
    }
    return (
        <section className='bg-main-black mx-8 pb-10 pt-20'>
            <div className='text-main-white mb-10'>
                <h1 className='text-center mb-2 text-4xl font-semibold tracking-tight'>Easy To Use !</h1>
                <p className=' text-center text-lg'>Just copy and Paste !</p>
            </div>
            <div className='flex justify-between md:flex-row flex-col gap-5'>
                <div className='w-full md:w-[60%]'>
                    <div className='flex justify-between px-4 rounded-t bg-gray-600 text-white text text-base'>
                        <p>Example Usage</p>
                        <button onClick={() => copyCode(codeString)}>
                            Copy
                        </button>
                    </div>
                    <SyntaxHighlighter
                        language='htmlbars'
                        style={nightOwl}
                        wrapLongLines={true}
                        className="overflow-y-auto max-h-64"
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className='md:w-1/2 bg-main-white p-5 rounded'>
                    <h1 className='md:text-5xl text-3xl font-bold text-black mb-3'>
                        Echoes of
                        the Silenced Wind
                    </h1>
                    <p className='text-black text-sm'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum repudiandae aspernatur, assumenda unde ea consequuntur atque itaque dicta minima ab nemo iure quibusdam, maxime error. Harum mollitia facilis pariatur provident. Dignissimos facere quo deleniti eius?
                    </p>
                    <div className='mt-3'>
                        <button className='p-2 bg-main-white rounded-md border border-black text-black'>
                            Get Started.
                        </button>
                    </div>
                </div>

            </div>
        </section >
    )
}

