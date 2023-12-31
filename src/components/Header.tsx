export default function Header({ title }) {
    return (
        <div className="my-5 px-3">
            <h1 className="text-4xl font-bold text-main-white">
                {title}
            </h1>
        </div>
    );
}