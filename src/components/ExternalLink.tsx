export default function ExternalLink({ href, text }) {
  return (
    <div className="mb-2 mt-2">
      <a
        href={href}
        target="_blank"
        className="text-sky-400 underline"
        rel="noreferrer"
      >
        {text}
      </a>
    </div>
  );
}
