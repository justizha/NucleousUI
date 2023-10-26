import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeHighlight() {
    const codeString = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <h1 class="text-white font-bold text-2xl">Hello Mom!</h1>
        </body>
        </html>
    `;

    return (
        <section className='bg-main-black mx-8 pb-10'>
            <SyntaxHighlighter
                language="html"
                style={atomOneDark}
                className="rounded md:w-[65%] w-full"
            >
                {codeString}
            </SyntaxHighlighter>
        </section>
    )
}

