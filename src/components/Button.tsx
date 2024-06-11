import Link from "next/link";

export default function Button(props) {
  return (
    <Link
      href={"/design"}
      {...props}
      className="cursor-pointer rounded border bg-main-white p-2 text-lg  text-main-black duration-200 hover:scale-95"
    >
      {props.children}
    </Link>
  );
}
