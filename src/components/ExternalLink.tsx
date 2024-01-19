export default function ExternalLink({ href, text }) {
    return (
        <div className="mt-2 mb-2">
            <a href={href} target="_blank" className="underline text-sky-400">
                {text}
            </a>
        </div>
    );
}
