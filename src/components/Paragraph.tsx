export default function Paragraph({ text }) {
    return (
        <div className="my-2 px-6">
            <p className="text-main-white text-lg">
                {text}
            </p>
        </div>
    );
}