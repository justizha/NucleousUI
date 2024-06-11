export default function Header({ title }) {
  return (
    <div className="my-2">
      <h1 className="text-xl font-bold text-main-white md:text-2xl lg:text-3xl">
        {title}
      </h1>
    </div>
  );
}
