export default function Header({ title }) {
    return (
        <div className="my-2">
            <h1 className="text-3xl font-bold text-main-white">
                {title}
            </h1>
        </div>
    );
}