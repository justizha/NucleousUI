export default function Header({ title }) {
    return (
        <div className="my-2">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-main-white">
                {title}
            </h1>
        </div>
    );
}