export default function Paragraph({ text }) {
  return (
    <div className="my-2">
      <p className="text-sm text-main-white md:text-base lg:text-lg">{text}</p>
    </div>
  );
}
