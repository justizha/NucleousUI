export default function Paragraph({ text }) {
    return (
        <div className="my-2">
            <p className="text-main-white text-base">
                {text}
            </p>
        </div>
    );
}