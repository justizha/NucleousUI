export default function Paragraph({ text }) {
    return (
        <div className="my-2">
            <p className="text-main-white lg:text-lg md:text-base text-sm">
                {text}
            </p>
        </div>
    );
}